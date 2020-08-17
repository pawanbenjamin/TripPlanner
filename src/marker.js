import mapbox from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    switch(icon){
      case 'hotels':
        this.style.backgroundImage = "http://i.imgur.com/D9574Cu.png",
        break;
      case 'restaurants':
        this.style.backgroundImage = "http://i.imgur.com/cqR6pUI.png",
        break;
      case 'activites':
        this.style.backgroundImage = "http://i.imgur.com/WbMOfMl.png"
    }
};

export default buildMarker;
