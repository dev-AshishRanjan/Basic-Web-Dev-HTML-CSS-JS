const one= document.getElementById("one");
const two= document.getElementById("two");
const body= document.querySelector("body");

function getImg(){
    url="https://randomfox.ca/floof/";
    fetch(url).then(response => response.json())
    .then(data=>{
        one.style.background=`url(${data.image}) no-repeat center center / cover`;
    })
}
function getImg2(){
    url="https://random.dog/woof.json";
    fetch(url).then(response => response.json())
    .then(data=>{
        two.style.background=`url(${data.url}) no-repeat center center / cover`;
    })
}

getImg();
getImg2();


// two.style.background=`url("https://placebear.com/200/300") no-repeat center center / cover`;
// it is directly image link not api