// Add console.log to check to see if our code is working.
console.log("working");

//13.2.4
/* ADD MAP OBJECT
with setView() method:
CreateS the map object with a (center [lat,lng] and zoom level).
'mapid' references the id tag in html file */
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

/* OR create map with each attribute modification
let map = L.map("mapid", {
  center: [40.7, -94.5],
  zoom: 4
});
*/

// 13.4.1  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  fillColor: "#ffffa1"
}).addTo(map);

/* ADD TILE LAYER
OPTION 1: use tileLayer() method and leaflet code from quickstart guide */
/* We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}); */

/* style options for Mapbox IDS:
mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11 */

//OPTION 2: Use Mapbox styles api for "static tiles api"
// We create the title layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// other styles: https://docs.mapbox.com/api/maps/styles/#mapbox-styles

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
