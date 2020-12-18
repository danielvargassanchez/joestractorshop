

var percent=0;
try {
    
var slideBtnRight= document.getElementById("slide-btn-right");
var slideBtnLeft= document.getElementById("slide-btn-left");
var slide= document.getElementById("slides");
var slideH1= document.getElementById("slide-h1");
var slideH2= document.getElementById("slide-h2");
    

var categoriesContainer= document.getElementById("filter-by-categorie");
var btnCategories= document.getElementById("show-categories");



btnCategories.addEventListener("click", ()=>{
    categoriesContainer.classList.toggle("hide");
    btnCategories.classList.toggle("down-button");
});
} catch (error) {
    
}




//products events


// Index events and keyframes
try {
    document.addEventListener("DOMContentLoaded",function(event){
        addKeyframes();
    });
} catch (error) { 
}

try{
    slideH1.addEventListener("animationend", (e)=>{
        slideH1.removeAttribute("class", "animation-slide-h1");
    })
}
catch(error){
}

try {
    slideH2.addEventListener("animationend", (e)=>{
        slideH2.removeAttribute("class", "animation-slide-h2");
    })    
} catch (error) {
}


try {
    slideBtnLeft.addEventListener("click", ()=>{
        if(percent!=0){
            percent=percent-100;
            slide.style.marginLeft="-"+percent+"%";
            addKeyframes();
        }
    })
} catch (error) {
}

try {
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
} catch (error) {
}

try {
    function addKeyframes(){
        slideH1.setAttribute("class", "animation-slide-h1");
        slideH2.setAttribute("class", "animation-slide-h2");
    }
} catch (error) {
}
