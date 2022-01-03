// NAVBAR DROPDOWN
const menuButton = document.querySelector('.menu-button')
const dropdown = document.querySelector('.dropdown')

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
