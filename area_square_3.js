                // Создаем коллекцию геообъектов и задаем опции.
                var myGeoObjects = new ymaps.GeoObjectCollection([55.823180, 37.928795]);

                // Создаем круг, с площадью посаженного участка леса. Будем добавлять в него, квадраты.
                var myCircle = new ymaps.Circle([
                // Координаты центра круга.
                [55.823180, 37.928795],
                  // Радиус круга в метрах.
                  97
                ], {
                // Описываем свойства круга.
                // Содержимое балуна.
                balloonContent: "Площадь высадки леса - 0.25 га",
                }, {
                  // Задаем опции круга.
                  // Цвет заливки.
                  // Последний байт (77) определяет прозрачность.
                  // Прозрачность заливки также можно задать используя опцию "fillOpacity".
                  fillColor: "#E1EEE5",
                  // Задаем полную прозрачность.
                  fillOpacity: 0,
                  // Цвет обводки.
                  strokeColor: "#9CDBD9",
                  // Прозрачность обводки. Полная.
                  strokeOpacity: 0,
                  // Ширина обводки в пикселях равна 0.
                  strokeWidth: 0,
                  // Устанавливаем объекту круг, минимальный приоритет в коллекции. Чтобы он не перекрывал квадраты.
                  zIndex: 0
                });

                // Создание метки с квадратной активной областью и зеленым бекграундом. Посаженные участки леса.
                var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="square_layout">&nbsp;</div></div>');
                // Создание метки с квадратной активной областью и прозрачным бекграундом. Для пустых участков леса. Которые можно посадить.
                var square_layout1 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="square_layout1">&nbsp;</div></div>');


                // Создаем шаблон засаженного участка леса. В виде площади в квадратах.

                // Центральный ярус квадратов:
                // Центральный квадрат в ярусе.
                var squarePlacemark = new ymaps.Placemark(
                 [55.823180, 37.928795], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                // Правая от центра, сторона с квадратами.
                var squarePlacemark1 = new ymaps.Placemark(
                 [55.823180, 37.929057], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                // Левая от центра, сторона с квадратами.
                var squarePlacemark2 = new ymaps.Placemark(
                 [55.823180, 37.928532], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 37 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                // Завершаем построение центрального яруса квадратов:

                // Первый сверху ярус квадратов, от центрального:
                // Центральный квадрат в ярусе.
                var squarePlacemark_up1 = new ymaps.Placemark(
                 [55.823330, 37.928795], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                // Правая от центра, сторона с квадратами.
                var squarePlacemark_r_up1 = new ymaps.Placemark(
                 [55.823330, 37.929057], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                // Левая от центра, сторона с квадратами.
                var squarePlacemark_l_up1 = new ymaps.Placemark(
                 [55.823330, 37.928532], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 37 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                // Завершаем построение первого сверху яруса квадратов, от центрального.

                // Первый снизу ярус квадратов, от центрального:
                // Центральный квадрат в ярусе.
                var squarePlacemark_down1 = new ymaps.Placemark(
                 [55.823030, 37.928795], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                // Правая от центра, сторона с квадратами.
                var squarePlacemark_r_down1 = new ymaps.Placemark(
                 [55.823030, 37.929057], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );

                // Левая от центра, сторона с квадратами.
                var squarePlacemark_l_down1 = new ymaps.Placemark(
                 [55.823030, 37.928532], {
                   hintContent: 'Посаженный участок леса'
                   //balloonContent: 'Площадь высадки леса - 37 га'
                 }, {
                   iconLayout: squareLayout,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                // Завершаем построение первого снизу яруса квадратов, от центрального.

                // Добавляем коллекцию квадратов, с примерной площадью посаженного леса. В геоколлекцию.
                myGeoObjects
                   // Первый ярус от центра по горизонтали и вертикали.
                   .add(squarePlacemark).add(squarePlacemark1).add(squarePlacemark2)
                   // Первый сверху ярус квадратов, от центрального:
                   .add(squarePlacemark_up1).add(squarePlacemark_r_up1).add(squarePlacemark_l_up1)
                   // Второй сверху ярус квадратов, от центрального:
                   //.add(squarePlacemark_up_1).add(squarePlacemark_r_up_1).add(squarePlacemark_r_up_2).add(squarePlacemark_r_up_3).add(squarePlacemark_r_up_4).add(squarePlacemark_l_up_1).add(squarePlacemark_l_up_2).add(squarePlacemark_l_up_3).add(squarePlacemark_l_up_4)
                   //Первый снизу ярус квадратов, от центрального:
                   .add(squarePlacemark_down1).add(squarePlacemark_r_down1).add(squarePlacemark_l_down1)
                   // Второй снизу ярус квадратов, от центрального:
                   //.add(squarePlacemark_down_1).add(squarePlacemark_r_down_1).add(squarePlacemark_r_down_2).add(squarePlacemark_r_down_3).add(squarePlacemark_r_down_4).add(squarePlacemark_l_down_1).add(squarePlacemark_l_down_2).add(squarePlacemark_l_down_3).add(squarePlacemark_l_down_4)
                   // И в конце добавляем в геоколлекцию круг, с площадью посадки.
                   .add(myCircle);
