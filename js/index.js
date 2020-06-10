const advImg=document.querySelector('.img-content')
// mouseenter
advImg.addEventListener('mouseenter', e => {
    advImg.style.transform='scale(1.5)';
    advImg.style.transition='transform 1s';
})
// mouseleave
advImg.addEventListener('mouseleave', e =>{
    advImg.style.transform='scale(1)';
   })

// click
document.querySelectorAll('.intro').forEach((element) =>{
element.addEventListener('click',e => {
// event.stoppropagation();
element.style.background='hotpink';
  });
});
// dblclick
const logo= document.querySelector('.logo-heading');
logo.addEventListener('dblclick', () => {
   logo.textContent='AWSOME'
})
// keydown
window.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
      document.body.style = 'color: yellow; background-color: black;'
    } else if (e.key === 'm') {
      document.body.style = 'color: black; background-color: green;'
    }
  });
//   resize
  const letsGo = document.getElementsByClassName('img-content')
    window.addEventListener('resize', e =>{
    letsGo[1].src="https://unsplash.it/200/200"
    console.log(letsGo)
})
// mouseover
const homeLink=document.querySelector(".nav-link")
homeLink.addEventListener('mouseover', e =>{
    homeLink.style.color='red'
})
// mouseout
homeLink.addEventListener('mouseout', e =>{
    homeLink.style.color='black'
})



