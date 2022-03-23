// Add console.log to check to see if our code is working.
console.log("working");
//////////////////////////////////////////////////////////
// set up map before so map is loaded before adding data to it
/////////////////////////////////////////////////////////////

/*Use Mapbox styles api for "static tiles api" to
We create the streets view tile layer that will be the background of our map.*/
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer object that holds streets and dark maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add 
L.control.layers(baseMaps).addTo(map);

////////////////////////////////////////////////////////////////////
//add GeoJSON data as a new layer to map
/////////////////////////////////////////////////////////////////

// Accessing the airport GeoJSON URL
let airportDataURL = "https://raw.githubusercontent.com/aberloro/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data with d3 and then() method
d3.json(airportDataURL).then(function(data) {
  console.log(data);
  // Create a GeoJSON layer with 2 arguements: data and callback function 
  // could just do:  L.geoJSON(data).addTo(map)   ...if you dont want popups
  L.geoJson(data, {
    //call an anonymus function and pass feature, layer(properties)
    onEachFeature:function(feature,layer) {
      layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h3> Airport Name: " + feature.properties.name + "</h3>");
    }
  })
    .addTo(map);
});


