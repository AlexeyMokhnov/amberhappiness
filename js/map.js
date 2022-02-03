ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [56.25419274, 43.97447264],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });
//         var myPlacemark = new ymaps.Placemark([56.25419274, 43.97447264]);
// myMap.geoObjects.add(myPlacemark);
myPlacemark = new ymaps.Placemark([56.25419274, 43.97447264], {
hintContent: 'Мызинская, 7',
balloonContent: 'Мызинская, 7 <br> Питомник шпицев | AmberHappiness',
});

myMap.geoObjects.add(myPlacemark);

    }
  