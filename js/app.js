const display = document.getElementById('display');

const getLocation = () =>{
    if(navigator.geolocation){
        // navigator.geolocation.getCurrentPosition(shwPosition);
        navigator.geolocation.watchPosition(shwPosition);
    }
    else{
        display.innerHTML("Geolocation is not abailable in your browser!");
    }
};

function shwPosition(position) {
    display.innerHTML = "Latitud " + position.coords.latitude + "<br/>Longitude: " + position.coords.longitude;
}