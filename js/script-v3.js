// DARKMODE
let checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 200)
}
///////////////////////////////////////////////////////////////////
// TOAST NOTIF
const toastButton = document.querySelector('.toast-notif-btn')

console.log(toastButton)
toastButton.addEventListener('click', () => {
  const divToaster = document.querySelector(".toaster")
  const divCreate = document.createElement('div')
  const timeout1 = 1000
  divCreate.classList.add("test")
  divCreate.innerHTML = "Test notification"
  divToaster.prepend(divCreate)
  setTimeout(() => {
    divCreate.remove()
  }, timeout1);
  console.log("click")
})
////////////////////////////////////////////////////////////////////
// SIDEBAR
const sidebarClose = document.querySelector('.sidebar-close')
sidebarClose.addEventListener('click', () => {
  console.log("click", sidebarClose)
  const divSidebar = document.querySelector(".general-sidebar")
  const divPage = document.querySelector('.general-page')
  divSidebar.classList.toggle("sidebar-action")
  divPage.classList.toggle("general-page-action")
})
///////////////////////////////////////////////////////////////////
// Dropdown Menu
let dropdown = document.querySelectorAll('.dropdown');
let dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	let button = el.querySelector('[data-toggle="dropdown"]'),
    menu = el.querySelector('.dropdown-menu'),
    arrow = button.querySelector('i.fas');
    button.onclick = function(event) {
      event.preventDefault();
      menu.classList.toggle('dropdown-menu-hidden');
      arrow.classList.toggle('arrow-open');
    };
});

///////////////////////////////////////////////////////////////////
// Autowriter :
const typedTextSpan = document.querySelector("#auto-writer");
const cursorSpan = document.querySelector(".cursor");
const txt = ['Lorem ipsum dolor sit amet consectetur.', 'Test', 'Test2'];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 400; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < txt[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += txt[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = txt[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=txt.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(txt.length) setTimeout(type, newTextDelay + 250);
});
//////////////////////////////////////////////////////////////////////////////////


