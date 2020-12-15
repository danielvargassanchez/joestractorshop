var slideBtnRight= document.getElementById("slide-btn-right");
var slideBtnLeft= document.getElementById("slide-btn-left");
var slide= document.getElementById("slides");
var slideH1= document.getElementById("slide-h1");
var slideH2= document.getElementById("slide-h2");
var percent=0;

document.addEventListener("DOMContentLoaded",function(event){
    addKeyframes();
});

slideH1.addEventListener("animationend", (e)=>{
    slideH1.removeAttribute("class", "animation-slide-h1");
})
slideH2.addEventListener("animationend", (e)=>{
    slideH2.removeAttribute("class", "animation-slide-h2");
})

slideBtnLeft.addEventListener("click", ()=>{
    if(percent!=0){
        percent=percent-100;
        slide.style.marginLeft="-"+percent+"%";
        addKeyframes();
    }
})

slideBtnRight.addEventListener("click", ()=>{

    if(percent!=200){
        percent=percent+100;
        slide.style.marginLeft="-"+percent+"%";
        addKeyframes();
    }else{
        percent=0
        slide.style.marginLeft="-"+percent+"%";
        addKeyframes();
    }
})

function addKeyframes(){
    slideH1.setAttribute("class", "animation-slide-h1");
    slideH2.setAttribute("class", "animation-slide-h2");
}