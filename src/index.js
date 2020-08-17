import mapboxgl from "mapbox-gl";
import buildMarker from "./marker"

mapboxgl.accessToken = "pk.eyJ1IjoicGF3YW5iZW5qYW1pbiIsImEiOiJja2R5cGM2NWcycGVrMnhwYjZ3eHliYXAwIn0.CxO-jXKwUebdhJJ1iAqeAg"

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


