const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  const random = Math.floor(Math.random()*4)
  
  document.body.style.backgroundColor=colors[random];
  color.textContent = colors[random];
})
