const mySwiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    slidesPerView: 2,
    centeredSlides: true,
    speed: 500,


    pagination: {
        el: '.swiper-pagination',
    }
})

//scrollbar
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector("#progressBar").style.width = scrolled + "%";
}



//links
document.getElementById('linkToAbout').href = window.location.href + '#about'