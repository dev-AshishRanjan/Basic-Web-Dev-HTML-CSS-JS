function rotate(){
    if(document.querySelector(".cube").style.animation == ""){
        document.querySelector(".cube").style.animation = "animate 4s linear infinite";
    }
    else{
        document.querySelector(".cube").style.animation = "";
    }
}