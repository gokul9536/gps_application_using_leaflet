const latDiv = document.getElementById("latitude");
const longDiv = document.getElementById("longitude");

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        latDiv.innerHTML = `Latitude : ${latitude}`;
        longDiv.innerHTML = `Longitude : ${longitude}`;
    }, 
    (err) => {
        alert("Location cannot be tracked");
    })
}
else {
    alert("Navigator is not supported");
}