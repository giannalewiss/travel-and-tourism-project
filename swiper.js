const swiper = new Swiper('.swiper',{
    slidePerView: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
            //set translateZ(-400px) on previos slides
            translate: [0,0,-400],
        },
        next: {
            //set translateX(100%) on next slides
            translate: ["100",0,0]
        },
    },
    loop: true,
    direction: "horizontal",

    autoplay:{
        delay: 5000,//5s

    },
    speed: 400,//ms
    spaceBetween: 100,//px

});


const swiper2= new Swiper(".swiper2",{ 
    slidesPerView: 3,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,

    autoplay: {
        delay: 5000,
    },
    speed: 400,

    breakpoints: {
        //when window width is >=320px
        320: {
            slidesPerView: 1,
        }, //when window width is >=480px
        480: {
            slidesPerView: 2,
        }, //when window width is >=640px
        640: {
            slidesPerView: 3,
        },
    },
})