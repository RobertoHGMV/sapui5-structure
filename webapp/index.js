sap.ui.define([
    'sap/ui/core/ComponentContainer',
    "sap/ui/core/mvc/XMLView"
], function(ComponentContainer, XMLView) {
    'use strict';
    
    new ComponentContainer({
        name: "appstructure",
        settings: {
            id: "appstructure"
        },
        async: true
    }).placeAt("content");
});