const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const details = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};
const loading = getElement('.loading')
const presentDrinks = async (url) => {
  loading.classList.remove('hide-loading');
  // fetch and display
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    displayDrinks(data);
  } catch (error) {
    console.log(error);
    
  }
};



const displayDrinks= ({drinks})=>
{loading.classList.add("hide-loading");
  const section = getElement('.section-center');
  const title = getElement('.title');
  if(!drinks)
  {
    // hide loading
    title.textContent = 'sorry, no drinks matched';
    section.innerHTML= null;
    loading.classList.add("hide-loading");
    return;
  }
  const newDrinks = drinks.map((drink)=>{
    const {idDrink:id,strDrink:name,strDrinkThumb:image}=drink;
    return `<a href="drink.html">
              <article class="cocktail" data-id="${id}">
                <img src="${image}" alt="${name}">
                <h3>
                  ${name}
                </h3> </article>`;
  }).join('')
  title.textContent='';
  section.innerHTML=newDrinks;
  return section;
};

const form = getElement('.search-form');
const input = getElement('[name="drink"]');
form.addEventListener('keyup',function (e){
  e.preventDefault();
  const value=input.value;
  if(!value)
    return;
  presentDrinks(`${url}${value}`);
})

window.addEventListener('DOMContentLoaded',()=>{
  presentDrinks(`${url}${'a'}`);
})