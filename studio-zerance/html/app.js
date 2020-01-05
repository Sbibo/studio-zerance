const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');
const sliderText = document.querySelector('.slider-text')
//Bouton
const nextBtn = document.querySelector('#nextBtn');
let counter =1;
const size = sliderImages[0].clientWidth; 
slider.style.transform ='translateX('+(-size*counter)+'px'
//Évenement lorsqu'on clique sur la flèche
nextBtn.addEventListener('click',()=>{
    if (counter>=sliderImages.length-1)return
    slider.style.transition='transform 0.4s ease-in-out'
    counter++;
    slider.style.transform ='translateX('+(-size*counter)+'px'
    sliderText.style.display='none'
})

//Évenement lorsque la transition est complétée 
slider.addEventListener('transitionend',()=>{
    sliderText.style.display='block'

    if(sliderImages[counter].id==='lastClone'){
        slider.style.transition='none';
        counter=sliderImages.length=2;
        slider.style.transform ='translateX('+(-size*counter)+'px'
    }
    if(sliderImages[counter].id==='firstClone'){
        slider.style.transition='none';
        counter=sliderImages.length-counter;
        slider.style.transform ='translateX('+(-size*counter)+'px'
    }

})