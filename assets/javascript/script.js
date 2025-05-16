let lastScrollTop =0;
const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    let currentScroll = this.window.pageYOffset || this.document.documentElement.scrollTop;

    if(currentScroll > lastScrollTop){
        header.style.top = '-100px'
    }
    else{
        header.style.top = '0'
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll 
})




//carrousel
const conteiner = document.getElementById("conteiner-img");
document.getElementById("btn-left").addEventListener("click", function(){
    conteiner.scrollBy({ left:-580, behavior: "smooth" });
})

document.getElementById("btn-right").addEventListener("click", function(){
    conteiner.scrollBy({ left: 580, behavior: "smooth" });
})

setInterval(()=>{
    const maxScrollLeft = conteiner.scrollWidth - conteiner.clientWidth;

    if (conteiner.scrollLeft >= maxScrollLeft) {
        conteiner.scrollTo({left: 0 , behavior:"smooth"})
    }
    else{
        conteiner.scrollBy({left: 580 , behavior:"smooth"})
    }
},2500)