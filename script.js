var hamBtn= document.querySelector('.ham-btn')
var nav= document.querySelector('header .nav-header ul')
var navLi= document.querySelector('.nav-header ul li')
const btn1=document.querySelector('.ham-btn span:nth-child(1)')
const btn2=document.querySelector('.ham-btn span:nth-child(2)')
const btn3=document.querySelector('.ham-btn span:nth-child(3)')
var navKlik= document.querySelectorAll(' ul li')
// hamBtn.forEach(function(item){
//     item.addEventListener('click', function(){
//         item.classList.toggle('show')
//     })
// })
hamBtn.onclick=()=>{
    // navLi.onclick.toggle('show')
   nav.classList.toggle('show')
   btn1.classList.toggle('show')
    btn2.classList.toggle('show')
    btn3.classList.toggle('show')
}
// navKlik.onclick=()=>{
//     navKlik.classList.toggle('show')
// }
navKlik.forEach(function(item) {
    
    item.addEventListener("click", function(){
        navKlik.forEach(function(item) {
            item.classList.remove('show')
        })
        item.classList.toggle('show')
    })
});
// a_parent.forEach(function(aitem){

//     aitem.addEventListener("click", function(){
//         a_parent.forEach(function(aitem){
//             aitem.classList.remove("active");
//         })
//         dd_menu_a.forEach(function(dd_menu_item){
//             dd_menu_item.classList.remove("active");
//         })
//         aitem.classList.add("active");
//     })
// })