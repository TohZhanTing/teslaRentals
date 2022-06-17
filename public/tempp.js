let menuBtn = document.querySelector('#menu-btn');
let navibar = document.querySelector('.navibar');
menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navibar.classList.toggle('active');
    }
document.querySelector("#login-btn").onclick =() => {
    document.querySelector('.login-form-container').classList.toggle('active');

}

document.querySelector("#close-login-form").onclick =() => {
    document.querySelector('.login-form-container').classList.remove('active');
    
}
    

window.onscroll = () => {
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        } else {
            document.querySelector('.header').classList.remove('active');
        }
        menuBtn.classList.remove('fa-times');
        navibar.classList.remove('active');
    }

window.onload = () => {
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        } else {
            document.querySelector('.header').classList.remove('active');
        }
    }