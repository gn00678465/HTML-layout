(function() {
  const products = []
  const productsList = document.querySelector('#productsList');
  for (let i = 0; i < 12; i++) {
    const productData = {
      "title": "Poppy & Barley",
      "imgPath": `./assets/images/product/products${i+1}.jpg`,
      "brand": 'Jo Malone',
      "base_price": 1580,
      "price": 1380
    }
    products.push(productData);
  }
  
  function formatPrice(value) {
    let val = (value/1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const html = products.map((item) => {
    return `
    <li class="col-6 col-md-4 col-lg-3 mb-15">
      <div class="card">
        <a href="#" class="card-header">
          <img src="${item.imgPath}" alt="" class="product-img">
        </a>
        <div class="card-body">
          <h4 class="font-weight-semibold text-lg text-lg-2_lg">Poppy & Barley</h4>
          <p class="">Jo Malone</p>
          <p>NT$${formatPrice(item.price)}<span class="ml-2 line-through">NT$1,580</span></p>
          <a href="" class="text-primary mr-3">
            <span class="material-icons text-lg text-lg-2_lg">
              favorite
              </span>
          </a><a href="" class="text-primary">
            <span class="material-icons text-lg text-lg-2_lg">
              shopping_cart
              </span>
          </a>
        </div>
      </div>
    </li>
    `
  }).join("");

  productsList.innerHTML = html
})();