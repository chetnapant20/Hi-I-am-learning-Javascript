
const url = "https://www.course-api.com/javascript-store-products";

const products = document.querySelector('.products-center');

const fetchProducts = async()=>{
  products.innerHTML=' <div class="loading"></div>'
  try {
    const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error("Failed to fetch products");
        }
    const data = await resp.json();
    return data;
  } catch (error) {
    products.innerHTML = '<p class="error">there was an error</p>';
  }
}


fetchProducts();
const displayProducts = (list)=>{
    const productlists = list.map((product)=>{
      // id,name,price img
      console.log(product);
      
      return `
            <a class="single-product" href="product.html?id=${product.id}">
            <img src="${product.fields.image[0].url}" alt="${product.fields.title}" class="single-product-img img">
            <footer>
              <h5 class="name">${product.fields.name}</h5>
              <span class="price">$${product.fields.price/100}</span> 
            </footer>
          </a>
        `;
    }).join('');
    
    products.innerHTML = `<div class="products-container"> ${productlists}</div>`
}

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};
start();