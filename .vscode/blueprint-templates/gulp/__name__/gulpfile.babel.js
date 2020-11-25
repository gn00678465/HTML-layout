import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
import autoprefixer from 'autoprefixer'
import del from 'del'
import minimist from 'minimist'
import browserSync from 'browser-sync';
browserSync.create();
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';

/* 變數 */
const envOptions = {
  string: "env",
  default: { env: "develop" }
}
const options = minimist(process.argv.slice(2), envOptions)
const isProduct = options.env === "production" || options.env == "pro";

/* copy file */
export function copy() {
  return gulp.src([
    './app/**/*',
    '!./app/assets/js/**/*.js',
    '!./app/assets/style/**/*.scss',
    '!./app/assets/style/**/*.sass',
    '!./app/**/*.ejs',
    '!./app/**/*.html',
  ])
    .pipe(gulp.dest('./dist'))
    .pipe($.if(!isProduct, browserSync.stream()))
}

/* HTML layout*/
export function ejs() {
  return gulp.src(['./app/**/*.html'])
    .pipe($.plumber())
    .pipe($.frontMatter())
    .pipe($.layout((file) => file.frontMatter))
    .pipe(gulp.dest('./dist'))
    .pipe($.if(!isProduct, browserSync.stream()))
}

/* css */
export function scss() {
  return gulp.src(['./app/assets/style/**/*.sass', './app/assets/style/**/*.scss'])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      // includePaths: ["./node_modules/bootstrap/scss"]
    }).on("error", $.sass.logError))
    .pipe($.postcss([autoprefixer()]))
    .pipe($.if(isProduct, $.cleanCss()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/assets/style'))
    .pipe($.if(!isProduct, browserSync.stream()))
}

/* js */
export function venderJS() {
  return gulp.src([
    // "./node_modules/jquery/dist/jquery.min.js",
    // "./node_modules/bootstrap/dist/js/bootstrap.js"
    ])
    .pipe($.concat("vendors.js"))
    .pipe(gulp.dest("./dist/assets/js"))
}

export function babel() {
  return gulp.src('./app/assets/js/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat("all.js"))
    .pipe($.if(isProduct, $.uglify()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe($.if(!isProduct, browserSync.stream()))
}

/* image */
export function tinyImg() {
  return gulp.src('./app/assets/images/**')
    .pipe($.plumber())
    .pipe($.if(isProduct, $.imagemin([
      mozjpeg({
        quality: 75
      }),
      optipng({
        optimizationLevel: 3
      })
    ])))
    .pipe(gulp.dest('./dist/assets/images'))
}

/* server */
export function browser() {
  browserSync.init({
    server: {
      baseDir: './dist',
    }
  })
}

/* clean */
export function clean() {
  return del(['./dist']); // 需刪除檔案或目錄
}

/* watch */
export function watch() {
  gulp.watch(["./app/**/*.html", "./app/**/*.ejs"], gulp.series(ejs));
  gulp.watch(["./app/assets/style/**/*.sass", "./app/assets/style/**/*.scss"], gulp.series(scss))
  gulp.watch(["./app/assets/js/**/*.js"], gulp.series(babel))
  gulp.watch(["./app/assets/images/**/*"], gulp.series(copy))
}

exports.default = gulp.series(clean, copy, ejs, scss, babel, venderJS, gulp.parallel(browser, watch))
exports.build = gulp.series(clean, copy, ejs, scss, babel, venderJS, tinyImg)