const url = 'https://www.course-api.com/javascript-store-single-product?id=';
const productDOM = document.querySelector(".product")

const fetchProduct = async()=>{
  productDOM.innerHTML=`<h4 class="product-loading">loading...</h4>`
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id')
    console.log(id);
    const resp = await fetch(`${url}${id}`);
    const data = await resp.json();
    
    return data;
  } catch (error) {
     productDOM.innerHTML=`<p class="error">error</p>`
  }
  }

const displayProduct =(product)=>{
  //  company , colors,description, name,price,image(url:img)
  const {company,name: title,price,description,colors,image}=product.fields
  const {url:img} = image[0];
  document.title=title.toUpperCase();
const colorlist = colors
  .map((color) => {
    return `<span class="product-color" style=background:${color}></span>`;
  })
  .join("");

  productDOM.innerHTML = `<div class="product-wrapper">
      <img src="${img}" alt="" class="img">
      <div class="product-info">
        <h3>${title}</h3>
        <h5>${company}</h5>
        <span>$${price/100}</span>
        <div class="colors">
          ${colorlist}
        </div>
        <p>${description}</p>
        <button class="btn">add to cart</button>
      </div>
    </div>`;
}

const start =async()=>{
  const data = await fetchProduct()
  displayProduct(data)
}
start();