function updateMap() {
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp.data);
        console.log("updating data");
        rsp.data.forEach(element =>{
            latitude=element.latitude;
            longitude=element.longitude;

            cases = element.infected;
            if(cases>255){
                color=`rgb(${cases/255},${element.dead/255},${element.sick/255})`
            }
            else{
                color=`rgb(${cases},0,0)`
            }

            //mark on map
            new mapboxgl.Marker({
                draggable: false,
                color: color
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        })
    })
}
// setInterval(updateMap,50000);
updateMap();