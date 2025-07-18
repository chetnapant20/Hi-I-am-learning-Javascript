const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector('.color')

function fxn()
{
  let result='';
  for(let i =0;i<6;i++)
  {let number = Math.floor(Math.random()*16);
    result += hex[number];
  }
  return result;
}

btn.addEventListener('click', function(){
  const generate = '#'+fxn();
  color.textContent=generate;
  
  document.body.style.backgroundColor = generate;
});

