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


    // var oView = new XMLView({
    //     viewName: "appstructure.view.App"
    // });

    // // Registra a view com o administrador de mensagem
    // sap.ui.getCore().getMessageManager().registerObject(oView);

    // // Mostra a view XML App
    // oView.placeAt("content");
});