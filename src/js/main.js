"use strict";


(function() {


    /**
     * Функция создаёт новый объект типа Waypoint и добавляет на страницу анимацию
     * для элементов, селекторы которых указаны в targetElemSelectorArray. В качестве
     * элемента, который активирует анимацию, выступает элемент с селектором anchorElemSelector.
     *
     * @param {string} anchorElemSelector Селектор элемента, активирующий анимацию.
     * @param {Array.<string>} targetElemSelectorArray Массив селекторов целевых элементов.
     * @param {string} animationName Имя анимации (из animate.css)
     * @param {string} offset Отступ в пикселях или процентах от верхней линии активирующего элемента
     * (принимается не число, а строка вида "10" или "10%")
     * @returns {*|Waypoint}
     */
    function createAnimation(anchorElemSelector, targetElemSelectorArray,
                             animationName, offset) {
        return new Waypoint({
            element: document.querySelector(anchorElemSelector),
            handler: function(direction) {

                for (var i = 0; i < targetElemSelectorArray.length; i++) {
                    var elem = document.querySelector(targetElemSelectorArray[i]);
                    elem.classList.remove("hidden");
                    elem.classList.add("animated", animationName);
                }

                this.destroy();
            },
            offset: offset
        });
    }


    // hero desc
    var heroDescAnimation = createAnimation("header", ["#hero-desc"], "zoomIn", "0%");


    // hero image
    var heroImgAnimation = createAnimation("header", ["#hero-img"], "bounceInUp", "-10%");


    // features blocks
    var featuresBlocks = ["#features-block-1", "#features-block-2"];

    var featuresBlock1Animation = createAnimation(".features", featuresBlocks,
                                                  "bounceInUp", "40%");


    // iphone feature
    var iphoneFeatureImgAnimation = createAnimation(".iphone-feature", ["#iphone-feature-img"],
                                                    "bounceInLeft", "20%");


    // map feature
    var mapFeatureImgAnimation = createAnimation(".map-feature", ["#map-feature-img"],
                                                 "bounceInRight", "20%");


    // iphone screens
    var iphoneScreens = ["#iphone-screen-1", "#iphone-screen-2", "#iphone-screen-3",
                         "#iphone-screen-4", "#iphone-screen-5"];

    var iphoneScreen1Animation = createAnimation(".interface", iphoneScreens,
                                                 "zoomIn", "20%");


    // user pics
    var userPicsAnimation = createAnimation(".customers", ["#user-pics"], "flipInX", "20%");


    // review
    var reviewAnimation = createAnimation(".customers", ["#review"], "zoomIn", "20%");


    // plan cards
    var planCardsAnimation = createAnimation(".plan", ["#plan-card", "#plan-card-inactive"],
        "zoomIn", "20%");


})();