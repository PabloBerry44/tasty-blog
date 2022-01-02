// NAVBAR DROPDOWN
const menuButton = document.querySelector('.menu-button')
const dropdown = document.querySelector('.dropdown')

menuButton.addEventListener('click', ()=>{
    dropdown.classList.toggle('dropdown-drop')
})

// IMAGE SLIDER
const images = document.querySelectorAll('.sliding-image')
var i = 0;
function slider(){ 
    if (i<images.length){ 
            for(let i=0; i<images.length; i++){
                images[i].style.opacity="0"
                setTimeout(function() {images[i].style.display = "none"}, 1000)
            }
        setTimeout(function() {images[i].style.display = "block"}, 1000)
        setTimeout(function() {images[i].style.opacity="1"}, 1100)
        i++
    }
    if(i==images.length){
        i=0
    }
}
slider()
setInterval(slider, 5000)