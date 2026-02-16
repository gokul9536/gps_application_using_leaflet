if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        await fetch("http://localhost:5000/post-location", {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify({ 
                latitude: latitude,
                longitude: longitude,
            })
        });

        const map = L.map("map-viewer").setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map) // ✅ Fixed method name
            .bindPopup("Your are Here !")
            .openPopup();
    }, 
    (err) => {
        alert("Location cannot be tracked");
    });
} else {
    alert("Navigator is not supported");
}
