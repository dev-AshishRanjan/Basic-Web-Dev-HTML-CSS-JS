const api="https://v2.jokeapi.dev/joke/Any?amount=10";
const cards=document.querySelectorAll(".cards");
const category=document.querySelectorAll(".category");
const joke=document.querySelectorAll(".joke");
const tags=document.querySelectorAll(".tags");
var numbers=[];
function getData(){
    fetch(api).then(req=>req.json()).then(data=>{
        for(i=0;i<data.amount;i++){
            numbers.push(i);
        }
        console.log(data);

        for(num of numbers){
            // console.log(category[0].value);
            category[num].innerHTML=data.jokes[num].category;
            if(data.jokes[num].category == "Dark"){
                category[num].style.background="black";
                category[num].style.color="white";
            }
            if(data.jokes[num].category == "Programming"){
                category[num].style.background="orange";
                category[num].style.color="white";
            }
            if(data.jokes[num].category == "Christmas"){
                category[num].style.background="red";
                category[num].style.color="white";
            }
            if(data.jokes[num].category == "Pun"){
                category[num].style.background="white";
                category[num].style.color="black";
            }
            if(data.jokes[num].category == "Spooky"){
                category[num].style.background="wheat";
                category[num].style.color="black";
            }
            if(data.jokes[num].category == "Misc"){
                category[num].style.background="blue";
                category[num].style.color="white";
            }
            if(data.jokes[num].type== "twopart"){
                joke[num].innerHTML="<p style='color:red;'>Setup : </p>"+data.jokes[num].setup+"<br>"+"<p style='color:red;'>Delivery : </p>"+data.jokes[num].delivery ;
            }
            if(data.jokes[num].type== "single"){
                joke[num].innerHTML=data.jokes[num].joke;
            }

        }
    })
}

getData();

function reload(){
    getData();
}