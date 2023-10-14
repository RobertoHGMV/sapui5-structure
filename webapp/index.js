sap.ui.define([
    'sap/ui/core/ComponentContainer'
], function(ComponentContainer) {
    'use strict';
    
    new ComponentContainer({
        name: "appstructure",
        settings: {
            id: "appstructure"
        },
        async: true
    }).placeAt("content");
});