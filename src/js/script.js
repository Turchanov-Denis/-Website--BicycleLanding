const burger = document.querySelector(".menu__icon"),
    menuBody = document.querySelector(".menu__body")

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    menuBody.classList.toggle("show")

})