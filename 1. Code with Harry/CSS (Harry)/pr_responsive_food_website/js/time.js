function datetime(){
    time=new Date();
    document.getElementById("time").innerHTML=time;
}
setInterval(datetime,1000);