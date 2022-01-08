// NAVBAR DROPDOWN
const menuButton = document.querySelector('.menu-button')
const dropdown = document.querySelector('.dropdown')
const container = document.querySelector('.container')

container.addEventListener('click', ()=>{
    dropdown.classList.remove('dropdown-drop')
})

menuButton.addEventListener('click', ()=>{
    dropdown.classList.toggle('dropdown-drop')
})

// IMAGE SLIDER
var image = document.querySelectorAll('.image')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const myInterval = setInterval(nextImg, 4000); //change image every 5 seconds

prev.addEventListener('click', prevImg) //change image on click
next.addEventListener('click', nextImg) //change image on click

prev.addEventListener('click', ()=>{clearInterval(myInterval)}) //stop slideshow on click
next.addEventListener('click', ()=>{clearInterval(myInterval)}) //stop slideshow on click
let i = 0
image[i].style.display = "block"

function prevImg(){
    if(i==0){
        image[i].style.display = "none"
        i=image.length-1
        image[i].style.display = "block"
    }
    else{
        image[i].style.display = "none"
        i--
        image[i].style.display = "block"
    }
}
function nextImg(){
    if(i==image.length-1){
        image[i].style.display = "none"
        i=0
        image[i].style.display = "block"
    }
    else{
        image[i].style.display = "none"
        i++
        image[i].style.display = "block"
    }
}

const navButton = document.querySelectorAll('.nav-button')
navButton.forEach(navButton => {
    navButton.addEventListener('click', ()=>{
        dropdown.classList.remove('dropdown-drop')
    })
});


// darkmode
const switcher = document.querySelectorAll('.switch')
const circle = document.querySelectorAll('.circle')
const body = document.getElementsByTagName('body')
const navbar = document.getElementsByTagName('nav')
const main = document.getElementsByTagName('main')

//event listener on both dropdown and navbar swiches
for(let z = 0; z<switcher.length;z++){
    switcher[z].addEventListener('click', ()=>{
        for(let y = 0; y<circle.length; y++){
            //toggling darkmode classes
            circle[y].classList.toggle('circle-active')
            switcher[y].classList.toggle('switch-active')
        }
        body[0].classList.toggle('dark-body')
        navbar[0].classList.toggle('dark-navbar')
        main[0].classList.toggle('dark-main')
    })
}