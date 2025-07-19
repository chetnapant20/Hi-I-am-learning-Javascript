const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const section = document.querySelector(".sidebar");

toggleBtn.addEventListener('click',function(){
  section.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click',function(){
  section.classList.remove('show-sidebar')
})