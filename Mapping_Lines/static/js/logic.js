// Add console.log to check to see if our code is working.
console.log("working");

/* ADD MAP OBJECT with setView() method:
CreateS the map object with a (center [lat,lng] and zoom level).
'mapid' references the id tag in html file */
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a blue dashed line polyline using the line coordinates 
L.polyline(line, {
  color: "blue",
  dashArray: 5,
  opacity: .5,
  weight: 2
}).addTo(map);

/*Use Mapbox styles api for "static tiles api" to
We create the tile layer that will be the background of our map.*/
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
