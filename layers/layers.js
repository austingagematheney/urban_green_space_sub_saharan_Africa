var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GS_PAPERS_CENTROIDS_1 = new ol.format.GeoJSON();
var features_GS_PAPERS_CENTROIDS_1 = format_GS_PAPERS_CENTROIDS_1.readFeatures(json_GS_PAPERS_CENTROIDS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GS_PAPERS_CENTROIDS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GS_PAPERS_CENTROIDS_1.addFeatures(features_GS_PAPERS_CENTROIDS_1);
var lyr_GS_PAPERS_CENTROIDS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GS_PAPERS_CENTROIDS_1, 
                style: style_GS_PAPERS_CENTROIDS_1,
                interactive: true,
                title: '<img src="styles/legend/GS_PAPERS_CENTROIDS_1.png" /> GS_PAPERS_CENTROIDS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GS_PAPERS_CENTROIDS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GS_PAPERS_CENTROIDS_1];
lyr_GS_PAPERS_CENTROIDS_1.set('fieldAliases', {'id': 'id', 'TITLE': 'TITLE', 'AUTHORS': 'AUTHORS', 'YEAR': 'YEAR', 'GS_TYPE': 'GS_TYPE', 'JUST_LENS': 'JUST_LENS', 'POWER': 'POWER', 'POL_PRESCR': 'POL_PRESCR', 'DOI': 'DOI', });
lyr_GS_PAPERS_CENTROIDS_1.set('fieldImages', {'id': 'TextEdit', 'TITLE': 'TextEdit', 'AUTHORS': 'TextEdit', 'YEAR': 'TextEdit', 'GS_TYPE': 'TextEdit', 'JUST_LENS': 'TextEdit', 'POWER': 'TextEdit', 'POL_PRESCR': 'TextEdit', 'DOI': 'TextEdit', });
lyr_GS_PAPERS_CENTROIDS_1.set('fieldLabels', {'id': 'no label', 'TITLE': 'header label', 'AUTHORS': 'header label', 'YEAR': 'header label', 'GS_TYPE': 'header label', 'JUST_LENS': 'header label', 'POWER': 'header label', 'POL_PRESCR': 'header label', 'DOI': 'header label', });
lyr_GS_PAPERS_CENTROIDS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});