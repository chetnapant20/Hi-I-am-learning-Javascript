// traversing the dom

const btns = document.querySelectorAll('.question-btn');


btns.forEach(function(eve){
  
  eve.addEventListener('click',function(){
    const parent = eve.parentElement.parentElement;
    parent.classList.toggle('show-text')
    console.log(parent);
    
  })
})

// OR


//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click',function(){
    // to make only one open
    questions.forEach(function(item)
  {
    if(item!=question)
      item.classList.remove('show-text');
  })
    question.classList.toggle('show-text')
  })
})