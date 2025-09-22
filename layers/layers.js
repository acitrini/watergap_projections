ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-57.116221, -11.604004, 144.820528, 111.914944]);
var wms_layers = [];

var format_Worldmap_0 = new ol.format.GeoJSON();
var features_Worldmap_0 = format_Worldmap_0.readFeatures(json_Worldmap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Worldmap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Worldmap_0.addFeatures(features_Worldmap_0);
var lyr_Worldmap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Worldmap_0, 
                style: style_Worldmap_0,
                popuplayertitle: 'Worldmap',
                interactive: false,
                title: '<img src="styles/legend/Worldmap_0.png" /> Worldmap'
            });
var format_2100SSP585_1 = new ol.format.GeoJSON();
var features_2100SSP585_1 = format_2100SSP585_1.readFeatures(json_2100SSP585_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2100SSP585_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2100SSP585_1.addFeatures(features_2100SSP585_1);
var lyr_2100SSP585_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2100SSP585_1, 
                style: style_2100SSP585_1,
                popuplayertitle: '2100 SSP5-8.5',
                interactive: true,
    title: '2100 SSP5-8.5<br />\
    <img src="styles/legend/2100SSP585_1_0.png" /> -5.0 - -2.0<br />\
    <img src="styles/legend/2100SSP585_1_1.png" /> -2.0 - -1.0<br />\
    <img src="styles/legend/2100SSP585_1_2.png" /> -1.0 - -0.5<br />\
    <img src="styles/legend/2100SSP585_1_3.png" /> -0.5 - 0.0<br />\
    <img src="styles/legend/2100SSP585_1_4.png" /> 0.0 - 0.5<br />\
    <img src="styles/legend/2100SSP585_1_5.png" /> 0.5 - 1.0<br />\
    <img src="styles/legend/2100SSP585_1_6.png" /> 1.0 - 2.0<br />\
    <img src="styles/legend/2100SSP585_1_7.png" /> 2.0 - 5.0<br />\
    <img src="styles/legend/2100SSP585_1_8.png" /> 5.0 - 10.0<br />\
    <img src="styles/legend/2100SSP585_1_9.png" /> 10.0 - 20.0<br />' });
var format_2100SSP126_2 = new ol.format.GeoJSON();
var features_2100SSP126_2 = format_2100SSP126_2.readFeatures(json_2100SSP126_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2100SSP126_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2100SSP126_2.addFeatures(features_2100SSP126_2);
var lyr_2100SSP126_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2100SSP126_2, 
                style: style_2100SSP126_2,
                popuplayertitle: '2100 SSP1-2.6',
                interactive: true,
    title: '2100 SSP1-2.6<br />\
    <img src="styles/legend/2100SSP126_2_0.png" /> -5.0 - -2.0<br />\
    <img src="styles/legend/2100SSP126_2_1.png" /> -2.0 - -1.0<br />\
    <img src="styles/legend/2100SSP126_2_2.png" /> -1.0 - -0.5<br />\
    <img src="styles/legend/2100SSP126_2_3.png" /> -0.5 - 0.0<br />\
    <img src="styles/legend/2100SSP126_2_4.png" /> 0.0 - 0.5<br />\
    <img src="styles/legend/2100SSP126_2_5.png" /> 0.5 - 1.0<br />\
    <img src="styles/legend/2100SSP126_2_6.png" /> 1.0 - 2.0<br />\
    <img src="styles/legend/2100SSP126_2_7.png" /> 2.0 - 5.0<br />\
    <img src="styles/legend/2100SSP126_2_8.png" /> 5.0 - 10.0<br />\
    <img src="styles/legend/2100SSP126_2_9.png" /> 10.0 - 20.0<br />' });
var format_2050SSP585_3 = new ol.format.GeoJSON();
var features_2050SSP585_3 = format_2050SSP585_3.readFeatures(json_2050SSP585_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2050SSP585_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2050SSP585_3.addFeatures(features_2050SSP585_3);
var lyr_2050SSP585_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2050SSP585_3, 
                style: style_2050SSP585_3,
                popuplayertitle: '2050 SSP5-8.5',
                interactive: true,
    title: '2050 SSP5-8.5<br />\
    <img src="styles/legend/2050SSP585_3_0.png" /> -5.0 - -2.0<br />\
    <img src="styles/legend/2050SSP585_3_1.png" /> -2.0 - -1.0<br />\
    <img src="styles/legend/2050SSP585_3_2.png" /> -1.0 - -0.5<br />\
    <img src="styles/legend/2050SSP585_3_3.png" /> -0.5 - 0.0<br />\
    <img src="styles/legend/2050SSP585_3_4.png" /> 0.0 - 0.5<br />\
    <img src="styles/legend/2050SSP585_3_5.png" /> 0.5 - 1.0<br />\
    <img src="styles/legend/2050SSP585_3_6.png" /> 1.0 - 2.0<br />\
    <img src="styles/legend/2050SSP585_3_7.png" /> 2.0 - 5.0<br />\
    <img src="styles/legend/2050SSP585_3_8.png" /> 5.0 - 10.0<br />\
    <img src="styles/legend/2050SSP585_3_9.png" /> 10.0 - 20.0<br />' });
var format_2050SSP126_4 = new ol.format.GeoJSON();
var features_2050SSP126_4 = format_2050SSP126_4.readFeatures(json_2050SSP126_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2050SSP126_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2050SSP126_4.addFeatures(features_2050SSP126_4);
var lyr_2050SSP126_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2050SSP126_4, 
                style: style_2050SSP126_4,
                popuplayertitle: '2050 SSP1-2.6',
                interactive: true,
    title: '2050 SSP1-2.6<br />\
    <img src="styles/legend/2050SSP126_4_0.png" /> -5.0 - -2.0<br />\
    <img src="styles/legend/2050SSP126_4_1.png" /> -2.0 - -1.0<br />\
    <img src="styles/legend/2050SSP126_4_2.png" /> -1.0 - -0.5<br />\
    <img src="styles/legend/2050SSP126_4_3.png" /> -0.5 - 0.0<br />\
    <img src="styles/legend/2050SSP126_4_4.png" /> 0.0 - 0.5<br />\
    <img src="styles/legend/2050SSP126_4_5.png" /> 0.5 - 1.0<br />\
    <img src="styles/legend/2050SSP126_4_6.png" /> 1.0 - 2.0<br />\
    <img src="styles/legend/2050SSP126_4_7.png" /> 2.0 - 5.0<br />\
    <img src="styles/legend/2050SSP126_4_8.png" /> 5.0 - 10.0<br />\
    <img src="styles/legend/2050SSP126_4_9.png" /> 10.0 - 20.0<br />' });
var format_Baseline_5 = new ol.format.GeoJSON();
var features_Baseline_5 = format_Baseline_5.readFeatures(json_Baseline_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Baseline_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baseline_5.addFeatures(features_Baseline_5);
var lyr_Baseline_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baseline_5, 
                style: style_Baseline_5,
                popuplayertitle: 'Baseline',
                interactive: true,
    title: 'Baseline<br />\
    <img src="styles/legend/Baseline_5_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Baseline_5_1.png" /> 0 - 1<br />\
    <img src="styles/legend/Baseline_5_2.png" /> 1 - 2<br />\
    <img src="styles/legend/Baseline_5_3.png" /> 2 - 5<br />\
    <img src="styles/legend/Baseline_5_4.png" /> 5 - 10<br />\
    <img src="styles/legend/Baseline_5_5.png" /> 10 - 15<br />\
    <img src="styles/legend/Baseline_5_6.png" /> 15 - 20<br />\
    <img src="styles/legend/Baseline_5_7.png" /> 20 - 25<br />\
    <img src="styles/legend/Baseline_5_8.png" /> 25 - 50<br />\
    <img src="styles/legend/Baseline_5_9.png" /> 50 - 55<br />' });

lyr_Worldmap_0.setVisible(true);lyr_2100SSP585_1.setVisible(true);lyr_2100SSP126_2.setVisible(true);lyr_2050SSP585_3.setVisible(true);lyr_2050SSP126_4.setVisible(true);lyr_Baseline_5.setVisible(true);
var layersList = [lyr_Worldmap_0,lyr_2100SSP585_1,lyr_2100SSP126_2,lyr_2050SSP585_3,lyr_2050SSP126_4,lyr_Baseline_5];
lyr_Worldmap_0.set('fieldAliases', {'FID_1': 'FID_1', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_2100SSP585_1.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Country1': 'Country1', 'Country2': 'Country2', 'Continent': 'Continent', 'Area_sqkm': 'Area_sqkm', 'Baseline': 'Baseline', 'ssp126_50': 'ssp126_50', 'ssp585_50': 'ssp585_50', 'ssp126_00': 'ssp126_00', 'ssp585_00': 'ssp585_00', });
lyr_2100SSP126_2.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Country1': 'Country1', 'Country2': 'Country2', 'Continent': 'Continent', 'Area_sqkm': 'Area_sqkm', 'Baseline': 'Baseline', 'ssp126_50': 'ssp126_50', 'ssp585_50': 'ssp585_50', 'ssp126_00': 'ssp126_00', 'ssp585_00': 'ssp585_00', });
lyr_2050SSP585_3.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Country1': 'Country1', 'Country2': 'Country2', 'Continent': 'Continent', 'Area_sqkm': 'Area_sqkm', 'Baseline': 'Baseline', 'ssp126_50': 'ssp126_50', 'ssp585_50': 'ssp585_50', 'ssp126_00': 'ssp126_00', 'ssp585_00': 'ssp585_00', });
lyr_2050SSP126_4.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Country1': 'Country1', 'Country2': 'Country2', 'Continent': 'Continent', 'Area_sqkm': 'Area_sqkm', 'Baseline': 'Baseline', 'ssp126_50': 'ssp126_50', 'ssp585_50': 'ssp585_50', 'ssp126_00': 'ssp126_00', 'ssp585_00': 'ssp585_00', });
lyr_Baseline_5.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Country1': 'Country1', 'Country2': 'Country2', 'Continent': 'Continent', 'Area_sqkm': 'Area_sqkm', 'Baseline': 'Baseline', 'ssp126_50': 'ssp126_50', 'ssp585_50': 'ssp585_50', 'ssp126_00': 'ssp126_00', 'ssp585_00': 'ssp585_00', });
lyr_Worldmap_0.set('fieldImages', {'FID_1': 'Range', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_2100SSP585_1.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Country1': 'TextEdit', 'Country2': 'TextEdit', 'Continent': 'TextEdit', 'Area_sqkm': 'TextEdit', 'Baseline': 'TextEdit', 'ssp126_50': 'TextEdit', 'ssp585_50': 'TextEdit', 'ssp126_00': 'TextEdit', 'ssp585_00': 'TextEdit', });
lyr_2100SSP126_2.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Country1': 'TextEdit', 'Country2': 'TextEdit', 'Continent': 'TextEdit', 'Area_sqkm': 'TextEdit', 'Baseline': 'TextEdit', 'ssp126_50': 'TextEdit', 'ssp585_50': 'TextEdit', 'ssp126_00': 'TextEdit', 'ssp585_00': 'TextEdit', });
lyr_2050SSP585_3.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Country1': 'TextEdit', 'Country2': 'TextEdit', 'Continent': 'TextEdit', 'Area_sqkm': 'TextEdit', 'Baseline': 'TextEdit', 'ssp126_50': 'TextEdit', 'ssp585_50': 'TextEdit', 'ssp126_00': 'TextEdit', 'ssp585_00': 'TextEdit', });
lyr_2050SSP126_4.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Country1': 'TextEdit', 'Country2': 'TextEdit', 'Continent': 'TextEdit', 'Area_sqkm': 'TextEdit', 'Baseline': 'TextEdit', 'ssp126_50': 'TextEdit', 'ssp585_50': 'TextEdit', 'ssp126_00': 'TextEdit', 'ssp585_00': 'TextEdit', });
lyr_Baseline_5.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Country1': 'TextEdit', 'Country2': 'TextEdit', 'Continent': 'TextEdit', 'Area_sqkm': 'TextEdit', 'Baseline': 'TextEdit', 'ssp126_50': 'TextEdit', 'ssp585_50': 'TextEdit', 'ssp126_00': 'TextEdit', 'ssp585_00': 'TextEdit', });
lyr_Worldmap_0.set('fieldLabels', {'FID_1': 'hidden field', 'COUNTRY': 'hidden field', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_2100SSP585_1.set('fieldLabels', {'ID': 'hidden field', 'Name': 'header label - always visible', 'Country1': 'hidden field', 'Country2': 'hidden field', 'Continent': 'hidden field', 'Area_sqkm': 'hidden field', 'Baseline': 'hidden field', 'ssp126_50': 'hidden field', 'ssp585_50': 'hidden field', 'ssp126_00': 'hidden field', 'ssp585_00': 'inline label - visible with data', });
lyr_2100SSP126_2.set('fieldLabels', {'ID': 'hidden field', 'Name': 'header label - always visible', 'Country1': 'hidden field', 'Country2': 'hidden field', 'Continent': 'hidden field', 'Area_sqkm': 'hidden field', 'Baseline': 'hidden field', 'ssp126_50': 'hidden field', 'ssp585_50': 'hidden field', 'ssp126_00': 'inline label - visible with data', 'ssp585_00': 'hidden field', });
lyr_2050SSP585_3.set('fieldLabels', {'ID': 'hidden field', 'Name': 'header label - always visible', 'Country1': 'hidden field', 'Country2': 'hidden field', 'Continent': 'hidden field', 'Area_sqkm': 'hidden field', 'Baseline': 'hidden field', 'ssp126_50': 'hidden field', 'ssp585_50': 'inline label - visible with data', 'ssp126_00': 'hidden field', 'ssp585_00': 'hidden field', });
lyr_2050SSP126_4.set('fieldLabels', {'ID': 'hidden field', 'Name': 'header label - always visible', 'Country1': 'hidden field', 'Country2': 'hidden field', 'Continent': 'hidden field', 'Area_sqkm': 'hidden field', 'Baseline': 'hidden field', 'ssp126_50': 'inline label - visible with data', 'ssp585_50': 'hidden field', 'ssp126_00': 'hidden field', 'ssp585_00': 'hidden field', });
lyr_Baseline_5.set('fieldLabels', {'ID': 'hidden field', 'Name': 'header label - always visible', 'Country1': 'hidden field', 'Country2': 'hidden field', 'Continent': 'hidden field', 'Area_sqkm': 'hidden field', 'Baseline': 'inline label - visible with data', 'ssp126_50': 'hidden field', 'ssp585_50': 'hidden field', 'ssp126_00': 'hidden field', 'ssp585_00': 'no label', });
lyr_Baseline_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});