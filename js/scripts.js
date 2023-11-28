Fancybox.bind()

//const container = document.getElementById("myCarousel");
const container = document.querySelector("#myCarousel");

const options = { infinite: true };

new Carousel(container, options);

//Animate on Scroll
AOS.init();

var element = document.querySelector('.item');

element.style.height = '1000px'; 

element.style.transition = 'height 0.3s ease';
var multiple = new Multiple({
    selector: '.item',
    background: 'linear-gradient(#F3FAFE, #031B54)'
});

/* =============
    Navigation
============= */

var mainNav = document.querySelector("#mainNav");
var signInUpContainer = document.querySelector("#btn-container");
var burgerBtn = document.querySelector("#burger-container button");
var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");

console.log(burgerBtn);

var canYouSeeMainNav = false;

// var sectionTags = document.querySelectorAll("section");

function showNav(){
    // console.log("Hello Class!");
    // console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        mainNav.classList.add("showMainNav");
        signInUpContainer.classList.add("showSignIn");
        canYouSeeMainNav = true;

        //hide burger bars 
        burgerBars.classList.add("hide-burger-bars");

        //show burger x
        burgerX.classList.remove("hide-burger-x");


    }else{
        console.log("hide menu");
        mainNav.classList.remove("showMainNav");
        signInUpContainer.classList.remove("showSignIn");
        canYouSeeMainNav = false;

        //show burger bars 
        burgerBars.classList.remove("hide-burger-bars");

        //hide burger x
        burgerX.classList.add("hide-burger-x");
    }
    
}

burgerBtn.addEventListener("click", showNav);


/* =============
    Sign In
============= */

var signInBtn = document.querySelector("#sign-in-button");
var signInContainer =  document.querySelector("#sign-in-container");
var closeSignUpModalBtn= document.querySelector("#close-sign-up-modal-btn");


function showSignInModal(){
    // console.log("show modal now");
    signInContainer.classList.add("show-signIn-container");
    mainNav.classList.remove("showMainNav");
    signInUpContainer.classList.remove("showSignIn");


}

function hideSignInModal(){
    // console.log("close now");
    signInContainer.classList.remove("show-signIn-container");
}

signInBtn.addEventListener("click", showSignInModal);
closeSignUpModalBtn.addEventListener("click", hideSignInModal);
// signInContainer.addEventListener("click", hideSignInModal);

/* =============
    Sign Up
============= */

var signUpBtn = document.querySelector("#sign-up-button");
var signUpContainer =  document.querySelector("#sign-up-container");
var cancelSignUpModalBtn= document.querySelector("#cancel-sign-up-modal-btn");


function showSignUpModal(){
    // console.log("show modal now");
    signUpContainer.classList.add("show-signUp-container");
    mainNav.classList.remove("showMainNav");
    signInUpContainer.classList.remove("showSignUp");

}

function hideSignUpModal(){
    // console.log("close now");
    signUpContainer.classList.remove("show-signUp-container");

}

signUpBtn.addEventListener("click", showSignUpModal);
cancelSignUpModalBtn.addEventListener("click", hideSignUpModal);
// signUpContainer.addEventListener("click", hideSignUpModal);
