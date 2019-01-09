var parse_georaster = require("georaster");

var GeoRasterLayer = require("georaster-layer-for-leaflet");

// initalize leaflet map
var map = L.map('map').setView([0, 0], 5);

// add OpenStreetMap basemap
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// var url_to_geotiff_file = "example_4326.tif";
// var url_to_geotiff_file = "LC08_L1TP_024030_20180723_20180731_01_T1_B1_4326.TIF";
var url_to_geotiff_file = "http://localhost:8080/LC08_L1TP_024030_20180723_20180731_01_T1_B1_4326.TIF";

//fetch(url_to_geotiff_file)
//  .then(response => response.arrayBuffer())
//  .then(arrayBuffer => {
//    parse_georaster(arrayBuffer).then(georaster => {
//      console.log("georaster:", georaster);
//
//      /*
//          GeoRasterLayer is an extension of GridLayer,
//          which means can use GridLayer options like opacity.
//
//          Just make sure to include the georaster option!
//
//          http://leafletjs.com/reference-1.2.0.html#gridlayer
//      */
//      var layer = new GeoRasterLayer({
//          georaster: georaster,
//          opacity: 1.0,
//          resolution: Math.pow(2, 7)
//      });
//      layer.addTo(map);
//
//      map.fitBounds(layer.getBounds());
//
//  });
//});

parse_georaster(url_to_geotiff_file, null, true).then(georaster => {
  console.log("georaster:", georaster);

  /*
      GeoRasterLayer is an extension of GridLayer,
      which means can use GridLayer options like opacity.

      Just make sure to include the georaster option!

      http://leafletjs.com/reference-1.2.0.html#gridlayer
  */
  var layer = new GeoRasterLayer({
      georaster: georaster,
      opacity: 1.0,
      resolution: Math.pow(2, 7)
  });
  layer.addTo(map);

  map.fitBounds(layer.getBounds());

});
