console.log("This is fetch api tutorial");

// getting data from local space - txt data
// function getData(){
//     console.log("Starting getData");
//     url="./test.txt";
//     fetch(url).then((response)=>{
//         console.log("In then 1");
//         return response.text();
//     }).then((data)=>{
//         console.log("In then 2");
//         console.log(data);
//     })
//     console.log("Finishing getData");
// }


// getting data from internet - json data
function getData(){
    console.log("Starting getData");
    url="https://api.github.com/users/dev-ashishranjan";
    fetch(url).then((response)=>{
        console.log("In then 1");
        return response.json();   //json response for parsing the data
    }).then((data)=>{
        console.log("In then 2");
        console.log(data);
        console.log(data.login);
    })
    console.log("Finishing getData");
}

console.log("After running getData");
getData();
console.log("Before running getData");


// post data to a api
function postData(){
    url="https://jsonplaceholder.typicode.com/posts";    //url to post
    data={title: 'foo',body: 'bar',userId: 1,hero_no:1};  //what to post
    params={
        method:"POST",
        headers:{
            "content-type":"application/json; charset=UTF-8"
        },
        body:JSON.stringify(data)
    }
    fetch(url,params).then(response=>response.json())
    .then((data)=>{
        console.log(data);
    })
}
postData();
