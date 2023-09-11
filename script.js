const toggleBtn=document.querySelector('.toggle_btn');
const dropDown=document.querySelector('.drop_down');


toggleBtn.onclick=function(){
    dropDown.classList.toggle('open')
}