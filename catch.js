let box = document.getElementById('box');

window.addEventListener('mouseover', function(){
    box.style.top = Math.floor(Math.random() * ( innerHeight - box.clientHeight)) + "px";
    box.style.left = Math.floor(Math.random() * ( innerWidth - box.clientWidth)) + "px";


})