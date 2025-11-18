var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LmiteMunicipal_1 = new ol.format.GeoJSON();
var features_LmiteMunicipal_1 = format_LmiteMunicipal_1.readFeatures(json_LmiteMunicipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmiteMunicipal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteMunicipal_1.addFeatures(features_LmiteMunicipal_1);
var lyr_LmiteMunicipal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteMunicipal_1, 
                style: style_LmiteMunicipal_1,
                popuplayertitle: 'Límite Municipal',
                interactive: false,
                title: '<img src="styles/legend/LmiteMunicipal_1.png" /> Límite Municipal'
            });
var format_VulnerabilidadAcufera_2 = new ol.format.GeoJSON();
var features_VulnerabilidadAcufera_2 = format_VulnerabilidadAcufera_2.readFeatures(json_VulnerabilidadAcufera_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VulnerabilidadAcufera_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VulnerabilidadAcufera_2.addFeatures(features_VulnerabilidadAcufera_2);
var lyr_VulnerabilidadAcufera_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VulnerabilidadAcufera_2, 
                style: style_VulnerabilidadAcufera_2,
                popuplayertitle: 'Vulnerabilidad Acuífera',
                interactive: true,
    title: 'Vulnerabilidad Acuífera<br />\
    <img src="styles/legend/VulnerabilidadAcufera_2_0.png" /> Alta<br />\
    <img src="styles/legend/VulnerabilidadAcufera_2_1.png" /> Media<br />\
    <img src="styles/legend/VulnerabilidadAcufera_2_2.png" /> Baja<br />' });
var format_CurvasdeNivel_3 = new ol.format.GeoJSON();
var features_CurvasdeNivel_3 = format_CurvasdeNivel_3.readFeatures(json_CurvasdeNivel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNivel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNivel_3.addFeatures(features_CurvasdeNivel_3);
var lyr_CurvasdeNivel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurvasdeNivel_3, 
                style: style_CurvasdeNivel_3,
                popuplayertitle: 'Curvas de Nivel',
                interactive: true,
    title: 'Curvas de Nivel<br />\
    <img src="styles/legend/CurvasdeNivel_3_0.png" /> Maestra<br />\
    <img src="styles/legend/CurvasdeNivel_3_1.png" /> Intermedia<br />' });
var format_Localidades_4 = new ol.format.GeoJSON();
var features_Localidades_4 = format_Localidades_4.readFeatures(json_Localidades_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_4.addFeatures(features_Localidades_4);
var lyr_Localidades_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_4, 
                style: style_Localidades_4,
                popuplayertitle: 'Localidades',
                interactive: true,
    title: 'Localidades<br />\
    <img src="styles/legend/Localidades_4_0.png" /> Rural<br />\
    <img src="styles/legend/Localidades_4_1.png" /> Rural Amanzanada<br />\
    <img src="styles/legend/Localidades_4_2.png" /> Urbana<br />' });

lyr_MapaBase_0.setVisible(true);lyr_LmiteMunicipal_1.setVisible(true);lyr_VulnerabilidadAcufera_2.setVisible(true);lyr_CurvasdeNivel_3.setVisible(true);lyr_Localidades_4.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_LmiteMunicipal_1,lyr_VulnerabilidadAcufera_2,lyr_CurvasdeNivel_3,lyr_Localidades_4];
lyr_LmiteMunicipal_1.set('fieldAliases', {'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MUN_OFICIA': 'MUN_OFICIA', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'CVE_DIST': 'CVE_DIST', 'NOM_DIST': 'NOM_DIST', 'POCUPA10': 'POCUPA10', 'P_ASA10': 'P_ASA10', 'POR_ASA10': 'POR_ASA10', 'P_NASA10': 'P_NASA10', 'POR_NASA10': 'POR_NASA10', 'P_NE10': 'P_NE10', 'POR_NE10': 'POR_NE10', 'CPOR_ASA10': 'CPOR_ASA10', });
lyr_VulnerabilidadAcufera_2.set('fieldAliases', {'id': 'id', 'grado': 'Grado', });
lyr_CurvasdeNivel_3.set('fieldAliases', {'LENGTH': 'LENGTH', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'CONTOUR': 'CONTOUR', 'master': 'master', 'etiqueta': 'Tipo', });
lyr_Localidades_4.set('fieldAliases', {'id': 'id', 'nombre': 'Nombre ', 'tipo': 'Tipo', });
lyr_LmiteMunicipal_1.set('fieldImages', {'COV_': 'Range', 'COV_ID': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'MUN_OFICIA': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'CVE_DIST': 'TextEdit', 'NOM_DIST': 'TextEdit', 'POCUPA10': 'Range', 'P_ASA10': 'TextEdit', 'POR_ASA10': 'TextEdit', 'P_NASA10': 'TextEdit', 'POR_NASA10': 'TextEdit', 'P_NE10': 'TextEdit', 'POR_NE10': 'TextEdit', 'CPOR_ASA10': 'TextEdit', });
lyr_VulnerabilidadAcufera_2.set('fieldImages', {'id': 'TextEdit', 'grado': 'TextEdit', });
lyr_CurvasdeNivel_3.set('fieldImages', {'LENGTH': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'CONTOUR': 'TextEdit', 'master': 'TextEdit', 'etiqueta': 'TextEdit', });
lyr_Localidades_4.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', });
lyr_LmiteMunicipal_1.set('fieldLabels', {'COV_': 'hidden field', 'COV_ID': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'MUN_OFICIA': 'hidden field', 'CVE_ENT': 'hidden field', 'NOM_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'hidden field', 'CVE_DIST': 'no label', 'NOM_DIST': 'no label', 'POCUPA10': 'no label', 'P_ASA10': 'no label', 'POR_ASA10': 'no label', 'P_NASA10': 'no label', 'POR_NASA10': 'no label', 'P_NE10': 'no label', 'POR_NE10': 'no label', 'CPOR_ASA10': 'no label', });
lyr_VulnerabilidadAcufera_2.set('fieldLabels', {'id': 'hidden field', 'grado': 'inline label - always visible', });
lyr_CurvasdeNivel_3.set('fieldLabels', {'LENGTH': 'hidden field', 'COV_': 'hidden field', 'COV_ID': 'hidden field', 'CONTOUR': 'hidden field', 'master': 'hidden field', 'etiqueta': 'inline label - always visible', });
lyr_Localidades_4.set('fieldLabels', {'id': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', });
lyr_Localidades_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});