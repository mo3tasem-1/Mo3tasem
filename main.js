let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let MO3TASEM = document.querySelector('.MO3TASEM');
window.onscroll = function(){
    let value =scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5+ 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    MO3TASEM.style.fontSize = value  + 'px';
 if(scrollY >= 84){
    MO3TASEM.style.fontSize = 84  + 'px';
    MO3TASEM.style.fontSize = 'fixed';
    if(scrollY >= 85){
        document.querySelector('.main').style.background = 'red;'
    
    }
 }




}