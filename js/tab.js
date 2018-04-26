var app;

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/widgets/BasemapToggle",
  "esri/core/watchUtils",
  "dojo/query",
  "dojo/on",
  "dojo/domReady!"
], function (Map, MapView, Search, BasemapToggle, watchUtils, query, on) {
  app = {
    center: [-40, 40],
    scale: 50000000,
    basemap: "hybrid",
    viewPadding: {
      top: 0,
      bottom: 0
    },
    uiComponents: ["zoom"],
    containerMap: "mapViewDiv",
    activeView: null,
    searchWidget: null
  };

  // create the map and UI components
  var map = new Map({
    basemap: app.basemap
  });

  // 2d map view
  app.mapView = new MapView({
    container: app.containerMap,
    map: map,
    center: app.center,
    scale: app.scale,
    padding: app.viewPadding,
    ui: {
      components: app.uiComponents
    }
  });
  app.activeView = app.mapView;

  // search widget
  app.searchWidget = new Search({
    view: app.activeView
  }, "searchWidgetDiv");

  app.basemapWidget = new BasemapToggle({
    view: app.activeView,
    nextBasemap: "streets"
  });

});