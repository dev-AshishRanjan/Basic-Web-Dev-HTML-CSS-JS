// entrance

document.querySelector(".main2").style.display="none";
const tl=gsap.timeline({defaults:{ease:"power1.easeIn"}});
tl.fromTo(".cards",{opacity:0},{opacity:1,duration:0.2},"load")
tl.to(".cards",{rotationY:360,duration:0.5},"load")

// api
// my api key : 1d1e95c926e536819c9c01f851310447 ;
// api key used at time of dev(other's) : 04c35731a5ee918f014970082a0088b1;
var apiurl ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d1e95c926e536819c9c01f851310447&page=1";
var testurl ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d1e95c926e536819c9c01f851310447&";
const imgpath = "https://image.tmdb.org/t/p/w1280";
const searchapi ="https://api.themoviedb.org/3/search/movie?&api_key=1d1e95c926e536819c9c01f851310447&query=";

// category Selection
function category_selection(){
    var cat_value=document.getElementById("category").value;
    if(cat_value == "Discover"){
        testurl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d1e95c926e536819c9c01f851310447&";
        getData(testurl,imgpath,searchapi);
        document.querySelector(".search_popup").style.display="none";
    }
    else if(cat_value == "Now_Playing"){
        testurl= "https://api.themoviedb.org/3/movie/now_playing?api_key=1d1e95c926e536819c9c01f851310447&language=en-US&";
        getData(testurl,imgpath,searchapi);
        document.querySelector(".search_popup").style.display="none";
    }
    else if(cat_value == "Top_Rated"){
        testurl = "https://api.themoviedb.org/3/movie/top_rated?api_key=1d1e95c926e536819c9c01f851310447&language=en-US&";
        getData(testurl,imgpath,searchapi);
        document.querySelector(".search_popup").style.display="none";
    }
    else{
        testurl="https://api.themoviedb.org/3/movie/upcoming?api_key=1d1e95c926e536819c9c01f851310447&language=en-US&";
        getData(testurl,imgpath,searchapi);
        document.querySelector(".search_popup").style.display="none";
    }
    console.log(cat_value);
}

cards=document.querySelectorAll(".cards");
cards_img=document.querySelectorAll(".cards>.img");
cards_name=document.querySelectorAll(".cards>.names>.name");
cards_year=document.querySelectorAll(".cards>.names>.year");
cards_rate=document.querySelectorAll(".cards>.names>.rate");
cards_description=document.querySelectorAll(".cards>.description");
// const numbers =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var numbers =[];
var present_data="";


// fetch(testurl).then(req=>req.json()).then(overall_data=>{
//     console.log(overall_data);
//     document.querySelector(".pagenumber").innerHTML=data.page+"/"+data.total_pages ;

// })

function getData(apiurl,imgpath,searchapi){
    var numbers=[];
    // url="https://www.omdbapi.com/?apikey=9339eb0a&t=iron2";
    fetch(apiurl).then(request=>request.json()).then(data=>{
        console.log(data);
        present_data=data;
        // creating array
        for(i=0;i<data.results.length;i++){
            numbers.push(i);
        }
        console.log(numbers);

        for(num in numbers){
            cards_img[num].style.background=`url("${imgpath}${data.results[num].poster_path}") no-repeat center center / cover ` ;
            cards_name[num].innerHTML=data.results[num].title;
            cards_year[num].innerHTML=data.results[num].release_date;
            cards_rate[num].innerHTML="<i class='far fa-star'></i>"+data.results[num].vote_average+` (${data.results[num].vote_count})`;
            cards_description[num].innerHTML="<h2>Summary</h2>"+data.results[num].overview;

            document.querySelector(".pagenumber").innerHTML=data.page+"/"+data.total_pages ;
        }
        
    })
}
getData(apiurl,imgpath,searchapi);

function home_page(){
    document.querySelector(".search_popup").style.display="none";
    getData(apiurl,imgpath,searchapi);
}

// page change
var page_no=1;
var search_page_no=1;

// if(page_no ==1 || search_page_no==1){
//     document.querySelector("footer>.previous").style.display="none";
// } else{
//     document.querySelector("footer>.previous").style.display="block";
// }

function previous(){
    if(page_no >=2 || search_page_no>=2){
        page_no -=1;
        console.log(page_no);
        var apiurl =testurl+"page="+page_no;
        // getData(apiurl,imgpath,searchapi);
        if(search_var == true && search_page_no >1){
            search_page_no -=1;
            var search_url=searchapi+search_item+"&page="+search_page_no;
            getData(search_url,imgpath,searchapi);
        } else{
            getData(apiurl,imgpath,searchapi);
            document.querySelector(".search_popup").style.display="none";
        }
        document.querySelector(".pagenumber").innerHTML=data.page+"/"+data.total_pages ;
    }
    else{
        // document.querySelector("footer>.previous").style.display="none";
    }
}
function next(){
    page_no +=1;
    console.log(page_no);
    var apiurl =testurl+"page="+page_no;
    console.log(apiurl);
    if(search_var == true){
        search_page_no +=1;
        var search_url=searchapi+search_item+"&page="+search_page_no;
        getData(search_url,imgpath,searchapi);
    } else{
        getData(apiurl,imgpath,searchapi);
        document.querySelector(".search_popup").style.display="none";
    }
    document.querySelector(".pagenumber").innerHTML=data.page+"/"+data.total_pages ;
    
    // document.querySelector("footer>.previous").style.display="block";
}


function show_description(index){
    cards_description[index].style.display="block";
    tl.fromTo(cards_description[index],{y:"100%"},{y:"0%",duration:0.1});
    tl.to(cards[index],{scale:1.1,duration:0.2});
    for(ele of cards){
        if(ele != cards[index]){
            tl.to(ele,{opacity:0.1,duration:0.2},"opacity");
        }
    }
    // document.querySelector(`*:not(cards[${index}])`).style.opacity="0.3";
    // cards[index].style.opacity="1 !important";
    // document.querySelector(`*:not(${cards[index]})`).style.setProperty('opacity', "100%");
}
function hide_description(index){
    tl.fromTo(cards_description[index],{y:"0%"},{y:"100%",duration:0.01});
    tl.to(cards[index],{scale:1,duration:0.1});
    for(ele of cards){
        if(ele != cards[index]){
            tl.to(ele,{opacity:1,duration:0.1},"opacity2");
        }
    }
    // document.querySelector("*").style.filter="blur(0rem)";
    // cards_description[index].style.display="none";
}

// toogle menu
let menu=0;
function toggle_menu(){
    if(menu%2==0){
        tl.to("#menu-2",{x:"100%",opacity:0,duration:0.2});
        tl.to("#menu-1",{rotation:45,y:"7.5px",duration:0.2});
        tl.to("#menu-3",{rotation:-45,y:"-7.5px",duration:0.2},"-=0.2");
        document.querySelector(".menu-content").style.visibility="visible";
        tl.fromTo(".menu-content",{opacity:0,y:"-100%"},{opacity:1,y:"0%",duration:0.1});
        menu +=1;
    } else{
        tl.to("#menu-2",{x:"0%",opacity:1,duration:0.1});
        tl.to("#menu-1",{rotation:0,y:"0%",duration:0.1});
        tl.to("#menu-3",{rotation:0,y:"0",duration:0.1},"-=0.1");
        document.querySelector(".menu-content").style.visibility="hidden";
        document.querySelector(".menu-content>.menu").style.visibility="visible";
        menu -=1;
    }
}

// toggle mode
let root_mode=0;
let root=document.querySelector("*")
root.classList.add("dark_mode");
function toggle_mode(){
    if(root_mode==0){
        // document.querySelector(":root").style.setProperty('--mode_invert', "100%");
        // document.querySelector("footer").style.setProperty('filter', "100%");
        root_mode +=1;
        root.classList.add("light_mode");
        document.querySelector(".navbar>.menu-content>.invert").innerHTML="<i class='fas fa-moon'></i> Dark Theme";
    }
    else{
        // document.querySelector(":root").style.setProperty('--mode_invert', "0%");
        root_mode -=1;
        root.classList.remove("light_mode");
        document.querySelector(".navbar>.menu-content>.invert").innerHTML="<i class='fas fa-sun'></i> Light Theme";
    }
}

function search_movie_directing(event){
    if(event.keyCode == 13){
        search_movie();
    }
}

// search movie
var search_var=false;
var search_item=document.querySelector("#search").value;
function search_movie(){
    search_var=true;
    search_item=document.querySelector("#search").value;
    console.log(search_item);
    var numbers=[];
    // apiurl=search_url;
    var search_url=searchapi+search_item;
    fetch(search_url).then(request=>request.json()).then(data=>{
        console.log(data);
        present_data=data;
        if(data.results.length !=0){
            // creating array
            for(i=0;i<data.results.length;i++){
                numbers.push(i);
            }
            // clearing the cards
            for(card_element of cards){
                card_element.style.display="none";
            }
            document.querySelector(".search_popup").style.display="flex";
            document.querySelector(".search_popup>h2").innerHTML=search_item;
            for(num in numbers){
                cards[num].style.display="block";
                cards_img[num].style.background=`url("${imgpath}${data.results[num].poster_path}") no-repeat center center / cover ` ;
                cards_name[num].innerHTML=data.results[num].title;
                cards_year[num].innerHTML=data.results[num].release_date;
                cards_rate[num].innerHTML="<i class='far fa-star'></i>"+data.results[num].vote_average+` (${data.results[num].vote_count})`;
                cards_description[num].innerHTML="<h2>Summary</h2>"+data.results[num].overview;
    
                document.querySelector(".pagenumber").innerHTML=data.page+"/"+data.total_pages ;
            }
        }
        else{
            search_var=false;
            document.querySelector(".search_popup").style.display="flex";
            document.querySelector(".search_popup>h2").innerHTML="Invalid Search";
        }
        
    })
}

// page jump
var new_page_no=document.querySelector("#page_jump").value;
var jump_var=false;
function page_jump(event){
    // if(event.keyCode !=13){
    //     new_page_no=document.querySelector(".navbar>.page_jump>#page_jump").value;
    // }
    if(event.keyCode == 13){
        jump_var=true;
        new_page_no=document.getElementById("page_jump").value;
        console.log(new_page_no);
        var jump_url =testurl+"page="+new_page_no;
        if(search_var == true){
            var search_url=searchapi+search_item+"&page="+new_page_no;
            getData(search_url,imgpath,searchapi);
        }else{
            getData(jump_url,imgpath,searchapi);
        }
        document.querySelector(".pagenumber").innerHTML=data.page+"/"+data.total_pages;
    }
    // console.log(event,new_page_no);
}

//Description webpage
movie_poster=document.querySelector(".movie_poster");
movie_data=document.querySelector(".movie_data");
movie_img=document.querySelector(".movie_img");
main_detail=document.querySelector(".main_detail");

var des_index=0;
function getFullDescription(index){
    var cast_crousel=document.querySelector(".cast_crousel");
    var similer_movies_crousel=document.querySelector(".similer_movies_crousel");
    removeAllChildNodes(cast_crousel);
    removeAllChildNodes(similer_movies_crousel);
    // cards.style.display="none";
    for(ele of cards){
        ele.style.display="none";
    }
    document.querySelector(".navbar").style.display="none";
    document.querySelector("footer").style.display="none";
    document.querySelector(".main2").style.display="block";
    document.querySelector(".search_popup").style.display="none";
    document.querySelector(".category").style.display="none";
    tl.fromTo(".main2",{y:"100%"},{y:"0%",duration:0.5});

    des_index=index;
    console.log(des_index);
    console.log(present_data);

    movie_poster.style.background=`url("${imgpath}${present_data.results[index].backdrop_path}") no-repeat center center / cover `;
    movie_img.style.background=`url("${imgpath}${present_data.results[index].poster_path}") no-repeat center center / cover `;

    main_detail.querySelector("h1").innerHTML=present_data.results[index].title;
    main_detail.querySelector("h3").innerHTML=present_data.results[index].release_date;
    main_detail.querySelector("h4").innerHTML="<i class='fas fa-star'></i> "+present_data.results[index].vote_average + `  (${present_data.results[index].vote_count})`;

    // trailer
    trailer_url=`https://api.themoviedb.org/3/movie/${present_data.results[index].id}/videos?api_key=1d1e95c926e536819c9c01f851310447&language=en-US`;
    fetch(trailer_url).then(req=>req.json()).then(trailer_data=>{
        console.log(trailer_data);
        for(trailer_element of trailer_data.results){
            if(trailer_element.type == "Trailer"){
                main_detail.querySelector(".trailer").innerHTML="<i class='fab fa-youtube'></i> "+`<a href="https://www.youtube.com/watch?v=${trailer_element.key}" target="_blank"> Trailer</a> `;
                
                // document.querySelector(".movie_poster").innerHTML=`<iframe src=""  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen name="Trailer"> Trailer</a> `
                // main_detail.querySelector(".trailer").innerHTML="<i class='fab fa-youtube'></i> "+`<a href="https://www.youtube.com/embed/${trailer_element.key}" target="Trailer"> Trailer</a> `;
                // <iframe src="https://www.youtube.com/embed/w8Zcr9IhFO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            }
        }
    })

    // detail.data
    detailed_data='';
    genres_list=[];
    detailurl=`https://api.themoviedb.org/3/movie/${present_data.results[index].id}?api_key=1d1e95c926e536819c9c01f851310447&language=en-US`;
    fetch(detailurl).then(req=>req.json()).then(details_data=>{
        console.log(details_data);
        detailed_data=details_data;
        for(i=0;i<details_data.genres.length;i++){
            genres_list.push(details_data.genres[i].name+" ");
        }
        main_detail.querySelector("h2").innerHTML=genres_list;
        document.querySelector(".overview>p").innerHTML="Overview :<br><br>"+details_data.overview;
        document.querySelector(".movie_details>#status>p").innerHTML=details_data.status;
        document.querySelector(".movie_details>#duration>p").innerHTML=details_data.runtime+" Min";
        document.querySelector(".movie_details>#language>p").innerHTML=details_data.original_language;
        document.querySelector(".movie_details>#budget>p").innerHTML="$ "+details_data.budget;
        document.querySelector(".movie_details>#revenue>p").innerHTML="$ "+details_data.revenue;
    })

    // credits
    creditsurl=`https://api.themoviedb.org/3/movie/${present_data.results[index].id}/credits?api_key=1d1e95c926e536819c9c01f851310447&language=en-US`;
    fetch(creditsurl).then(req=>req.json()).then(credits_data=>{
        // crew
        console.log(credits_data);
        for(crew_el of credits_data.crew){
            if(crew_el.job == "Director"){
                document.querySelector(".crew>.director>h4").innerHTML=crew_el.name;
                document.querySelector(".crew>.director>p").innerHTML="Director";
            }
            if(crew_el.job == "Writer"){
                document.querySelector(".crew>#writer1>h4").innerHTML=crew_el.name;
                document.querySelector(".crew>#writer1>p").innerHTML="Writer";
                // credits_data.crew.delete(crew_el);
            }
            if(crew_el.job == "Story"){
                document.querySelector(".crew>#writer2>h4").innerHTML=crew_el.name;
                document.querySelector(".crew>#writer2>p").innerHTML="Story";
                // credits_data.crew.delete(crew_el);
            }
        }

        // cast
        for(cast_element of credits_data.cast){
            var cast_crousel=document.querySelector(".cast_crousel");
            if(cast_element.profile_path != null){
                var cast_wrapper=document.createElement("div");
                cast_wrapper.className="cast_wrapper";

                var cast_img=document.createElement("div");
                cast_img.className="cast_img";
                cast_img.innerHTML=`<img src="${imgpath+cast_element.profile_path}"/>`;
                
                var cast_name=document.createElement("h4");
                cast_name.className="cast_name";
                cast_name.innerHTML=cast_element.name;
                
                var cast_role=document.createElement("p");
                cast_role.className="cast_role";
                cast_role.innerHTML=cast_element.character;

                cast_wrapper.appendChild(cast_img);
                cast_wrapper.appendChild(cast_name);
                cast_wrapper.appendChild(cast_role);
                cast_crousel.appendChild(cast_wrapper);
            }
        }
    })
    
    // similar movies
    var sim_index=0;
    similar_movies_url=`https://api.themoviedb.org/3/movie/${present_data.results[index].id}/similar?api_key=1d1e95c926e536819c9c01f851310447&language=en-US&page=1`;
    fetch(similar_movies_url).then(req=>req.json()).then(similar_movies_data=>{
        console.log(similar_movies_data);
        // present_data=similar_movies_data;
        // var numbers=[];
        // for(i=0;i<similar_movies_data.results.length;i++){
        //     numbers.push(i);
        // }
        for(similer_movies_element of similar_movies_data.results){
            var similer_movies_crousel=document.querySelector(".similer_movies_crousel");
            
            var similar_movie_wrapper=document.createElement("div");
            similar_movie_wrapper.className="similar_movie_wrapper";

            var similar_movie_img=document.createElement("div");
            similar_movie_img.className="similar_movie_img";
            similar_movie_img.innerHTML=`<img src="${imgpath}${similer_movies_element.poster_path}" />`;
            
            var similer_movies_title=document.createElement("h2");
            similer_movies_title.className="similer_movies_title";
            similer_movies_title.innerHTML=similer_movies_element.title;
            
            var similer_movies_date=document.createElement("h4");
            similer_movies_date.className="similer_movies_date";
            similer_movies_date.innerHTML=similer_movies_element.release_date;
            
            var similar_movie_rate=document.createElement("p");
            similar_movie_rate.className="similar_movie_rate";
            similar_movie_rate.innerHTML="<i class='fas fa-star'></i> "+similer_movies_element.vote_average;

            similar_movie_wrapper.appendChild(similar_movie_img);
            similar_movie_wrapper.appendChild(similer_movies_title);
            similar_movie_wrapper.appendChild(similer_movies_date);
            similar_movie_wrapper.appendChild(similar_movie_rate);
            similer_movies_crousel.appendChild(similar_movie_wrapper);

            // similar movies element description
            similar_movie_wrapper.addEventListener("click",function(){ 
                present_data=similar_movies_data;
                getFullDescription(sim_index);
                sim_index +=1;
            });
        }
    })
    
    
}

function return_back(){
    
    for(ele of cards){
        ele.style.display="block";
    }
    document.querySelector(".navbar").style.display="flex";
    document.querySelector("footer").style.display="flex";
    document.querySelector(".category").style.display="block";
    tl.fromTo(".main2",{y:"0%"},{y:"100%",duration:0.7});
    setTimeout(()=>{
        document.querySelector(".main2").style.display="none";
    },700);
    
    // for normal
    var apiurl =testurl+"page="+page_no;
    console.log(apiurl);
    // for searched conition
    if(search_var == true){
        var search_url=searchapi+search_item+"&page="+search_page_no;
        getData(search_url,imgpath,searchapi);
    }
    // for jump condition
    else if(jump_var == true){
        var jump_url =testurl+"page="+new_page_no;
        if(search_var == true){
            var search_url=searchapi+search_item+"&page="+new_page_no;
            getData(search_url,imgpath,searchapi);
        }else{
            getData(jump_url,imgpath,searchapi);
        }
    } 
    else{
        getData(apiurl,imgpath,searchapi);
        document.querySelector(".search_popup").style.display="none";
    }
    document.querySelector(".pagenumber").innerHTML=data.page+"/"+data.total_pages ;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}