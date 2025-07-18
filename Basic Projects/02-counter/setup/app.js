let count = 0;
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
const value = document.querySelector('#value')

decrease.addEventListener('click',function(){
  count--;
  value.textContent=count;
  if(count===0)
    value.style.color='black';
  else if(count<0){
    value.style.color='red';
  }
})

increase.addEventListener('click',function(){
  count++;
  value.textContent=count;
  if(count===0)
    value.style.color='black';
  else if(count>0){
    value.style.color='green';
  }
})

reset.addEventListener('click',function(){
  count=0;
  value.textContent=0;
  value.style.color='black';
})

// OR
let cnt=0;
const btns = document.querySelector('.btn');

btns.forEach(function(btn){
  const current = btn.currentTarget.classList;
  if(current.contains('decrease'))
   { cnt--;}
  else if(current.contains('increase'))
   { cnt++;}
  else{ cnt=0;}
  value.textContent=cnt;
  if(cnt>0)
  {
    value.style.color='green'
  }
  else if(cnt<0)
  {
    value.style.color='red'
  }
  else{
    value.style.color='black'
  }
})