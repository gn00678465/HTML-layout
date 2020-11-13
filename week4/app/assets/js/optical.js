const opticalData = {
  sn: 'BJ41600S',
  price: '3490',
  colors: ['brown', 'darkslategray'],
};

const opticalDatas = [];


for (let i = 0; i < 12; i++) {
  const num = (i + 12) % 6;
  const imgPath = `./assets/images/series/optical-${num + 1}.png`;
  opticalData.img = imgPath;
  opticalDatas.push(opticalData);
}