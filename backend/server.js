const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

const userLocation = {
    latitude : null,
    longitude : null,
    updatedAt : new Date(),
};

server.post("/post-location", (req, res, next) => {
    const { latitude, longitude } = req.body;

    if(!latitude || !longitude)
        return res.status(400).json({ error: "Error Occured !" });

    userLocation.latitude = latitude;
    userLocation.longitude = longitude;
    userLocation.updatedAt = new Date();

    return res.json({ message: "Location saved!" });
});

server.get("/get-location", (req, res) => {
    if (!userLocation) {
        return res.status(404).json({ error: "No location found" });
    }
    res.json(userLocation);
});

server.listen(5000, () => {
    console.log("Server is listening");
});