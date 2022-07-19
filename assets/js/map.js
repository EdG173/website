var map = L.map('map', {
    center: [-18.014452, -70.251854],
    zoom: 18,
    minZoom: 2,
    maxZoom: 20,
    maxBounds: [[-18.4763,-71.1382], [-16.8012,-69.4353]]
    });
    var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var centros = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
    layers: "proyecto_webgis:rest_tacna", //gisweb:RESTAURANTES TACNA
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
centros.addTo(map);

var departamentos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
    layers: "proyecto_webgis:dep_tacna", //gisweb:DEPARTAMENTOS DE TACNA
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
departamentos.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
    layers: "proyecto_webgis:prov_tac", //gisweb:PROVINCIAS DE TACNA
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
    layers: "proyecto_webgis:distritos_tac", //gisweb:DISTRITOS DE TACNA
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
distritos.addTo(map);
    
var baseMaps = {
    "OSM": basemapOSM
};

var overlayMaps = {
    "RESTAURANTES DE TACNA": centros,
    "DISTRITOS DE TACNA": distritos,
    "PROVINCIAS DE TACNA": provincias,
    "DEPARTAMENTOS DE TACNA": departamentos
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);