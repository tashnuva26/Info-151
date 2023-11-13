// alert("Hello Class!");

var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button");
console.log(burgerBtn);

var canYouSeeMainNav = false;

// var sectionTags = document.querySelectorAll("section");

function showNav(){
    // console.log("Hello Class!");
    // console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        mainNav.classList.add("showMainNav");
        canYouSeeMainNav = true;
    }else{
        console.log("hide menu");
        mainNav.classList.remove("showMainNav");
        canYouSeeMainNav = false;
    }
    
}

burgerBtn.addEventListener("click", showNav);


// showNav();