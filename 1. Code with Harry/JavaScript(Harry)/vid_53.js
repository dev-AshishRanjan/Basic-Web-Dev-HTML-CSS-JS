function greet(name){
    console.log(name+" Good morning !");
}
let name1="Harry"
let name2="Abhi";
greet(name1);
greet(name2);
greet("loda");

function greet(name,greettext="good morning"){
    console.log(greettext);
    console.log(name+" Good morning !");
}
greet(name1,"hi");
greet(name2);
let greett="lol";
greet(name1,greett);

function sum(a,b,c) {
    d=a+b+c;
    return d;
}
let ret=sum(1,4,7);
console.log(ret);
