const burger = document.querySelector(".menu__icon"),
    menuBody = document.querySelector(".menu__body")

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    menuBody.classList.toggle("show");
    document.body.classList.toggle("lock");

})

// function ibg() {
//     document.querySelectorAll(".ibg").forEach(item =>{
//         const sourceImg = item.getElementsByTagName("IMG")[0];
//         console.log(sourceImg.src)
//         item.style.backgroundImage = `url("../img/AboutArticleBike/AboutArticleBike_02.png");`;
//         console.log(item)
        
//     })

// }
// ibg();

// $('.slider__body').slick();

$('.slider__body').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });