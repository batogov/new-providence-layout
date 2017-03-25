"use strict";


(function() {


    function createAnimation(anchorElemSelector, targetElemSelector,
                             animationName, offset) {
        return new Waypoint({
            element: document.querySelector(anchorElemSelector),
            handler: function(direction) {
                var elem = document.querySelector(targetElemSelector);
                elem.classList.remove("hidden");
                elem.classList.add("animated", animationName);
            },
            offset: offset
        });
    }


    var heroDescAnimation = createAnimation("header", "#hero-desc", "zoomIn", "0%");

    var heroImgAnimation = createAnimation("header", "#hero-img", "bounceInUp", "-10%");


    var featuresBlock1Animation = createAnimation(".features", "#features-block-1",
                                                  "bounceInUp", "40%");

    var featuresBlock2Animation = createAnimation(".features", "#features-block-2",
                                                  "bounceInUp", "40%");


    var iphoneFeatureImgAnimation = createAnimation(".iphone-feature", "#iphone-feature-img",
                                                    "bounceInLeft", "20%");


    var mapFeatureImgAnimation = createAnimation(".map-feature", "#map-feature-img",
                                                 "bounceInRight", "20%");


    var iphoneScreen1Animation = createAnimation(".interface", "#iphone-screen-1",
                                                 "zoomIn", "20%");

    var iphoneScreen2Animation = createAnimation(".interface", "#iphone-screen-2",
                                                 "zoomIn", "20%");

    var iphoneScreen3Animation = createAnimation(".interface", "#iphone-screen-3",
                                                 "zoomIn", "20%");

    var iphoneScreen4Animation = createAnimation(".interface", "#iphone-screen-4",
                                                 "zoomIn", "20%");

    var iphoneScreen5Animation = createAnimation(".interface", "#iphone-screen-5",
                                                 "zoomIn", "20%");


    var userPicsAnimation = createAnimation(".customers", "#user-pics", "flipInX", "20%");

    var reviewAnimation = createAnimation(".customers", "#review", "zoomIn", "20%");


    var planCardAnimation = createAnimation(".plan", "#plan-card",
        "zoomIn", "20%");

    var planCardInactiveAnimation = createAnimation(".plan", "#plan-card-inactive",
        "zoomIn", "20%");



})();