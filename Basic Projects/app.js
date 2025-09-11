
const greetings = [
  "Hi", // English
  "Hola", // Spanish
  "Salut", // French
  "Hallo", // German
  "Ciao", // Italian
  "Olá", // Portuguese
  "Privet", // Russian
  "Marhaba", // Arabic
  "Nǐ hǎo", // Chinese
  "Konnichiwa", // Japanese
];



function word(){
  const index = Math.floor(Math.random()*10);
  return greetings[index];
}

document.body.addEventListener('click',(event)=>{
  const element=document.createElement('div')
  element.className='bubble';
  element.innerText=word();
  element.style.left = event.clientX -25 + 'px';
  element.style.top = event.clientY -25 +'px'
  const parent = document.querySelector("body");
  parent.appendChild(element)

  setTimeout(()=>{
    parent.removeChild(element)
  },5000)
})