var gmapStyles = [
  
  // ----------------------------------------------------------------------------------------
  // SET BASE COLOR
  // ----------------------------------------------------------------------------------------
  {
    "featureType": "all",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#c1c1c0" }
    ]
  },

  // ----------------------------------------------------------------------------------------
  // WATER
  // ----------------------------------------------------------------------------------------
  {
    "featureType": "water",
    "stylers": [
    { "visibility": "simplified" },
      { "color": "#ffffff" }
    ]
  },

  // ----------------------------------------------------------------------------------------
  // LANDSCAPE
  // ----------------------------------------------------------------------------------------
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#c1c1c0" }
    ]
  },

  // ----------------------------------------------------------------------------------------
  // COUNTRY
  // ----------------------------------------------------------------------------------------
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#d8d8d8" }
    ]
  },

  // ----------------------------------------------------------------------------------------
  // LABELS
  // ----------------------------------------------------------------------------------------
  // By default we're turning everything off to keep things clean and simple.
  // We've also adding simplified styling defaults for any labels we might re-activate
  // ----------------------------------------------------------------------------------------
  {
    "featureType": "all",
    "elementType": "labels.text",
    "stylers": [
      { "color": "#9b9b96" },
      { "visibility": "on" }
    ]
  },

  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },

  // Turn Visibiliry Off
  {
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },

  // ----------------------------------------------------------------------------------------
  // TURN SOME BACK ON
  // ----------------------------------------------------------------------------------------
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#e8e8e8" },
      { "visibility": "on" },
      { "weight": 0.5 }
    ]
  }
  
];