// Add console.log to check to see if our code is working.
console.log("working");

//13.2.4///////////////////////////////////////////////////////
/* ADD MAP OBJECT

with setView() method:
CreateS the map object with a (center [lat,lng] and zoom level).
'mapid' references the id tag in html file */
let map = L.map('mapid').setView([34.0522, -118.2437], 10);

/* OR create map OBJECT with each attribute modification

let map = L.map("mapid", {
  center: [40.7, -94.5],
  zoom: 4
});

*/

//13.4.1 //////////////////////////////////////////////////////
// Add marker to map for LA, Ca
L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  weight: 2,
  opacity: 1,
  fillColor: "#ffffa1",
  fillOpacity: .1
  
}).addTo(map);

// ADD TILE LAYER with Mapbox styles api for "static tiles api"
// We create the tile layer that will be the background of our map.
let mapBoxStyleAPI = 'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}';

let streets = L.tileLayer(mapBoxStyleAPI, {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});
// other styles: https://docs.mapbox.com/api/maps/styles/#mapbox-styles

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

