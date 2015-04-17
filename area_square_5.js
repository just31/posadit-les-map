                // Создаем коллекцию геообъектов и задаем опции.
                var myGeoObjects = new ymaps.GeoObjectCollection([48.234599, 40.699303]);

                // Создаем круг, с площадью посаженного участка леса. Будем добавлять в него, квадраты.
                var myCircle = new ymaps.Circle([
                // Координаты центра круга.
                [55.647931, 38.859452],
                  // Радиус круга в метрах.
                  97
                ], {
                // Описываем свойства круга.
                // Содержимое балуна.
                balloonContent: "Площадь высадки леса - 2 га",
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
                 [55.647931, 38.859452], {
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
                 [55.647931, 38.859714], {
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
                var squarePlacemark1_2 = new ymaps.Placemark(
                 [55.647931, 38.859976], {
                    hintContent: 'Посаженный участок леса!'
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
                 [55.647931, 38.859190], {
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
                var squarePlacemark2_2 = new ymaps.Placemark(
                 [55.647931, 38.858928], {
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
                 [55.648079, 38.859452], {
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
                 [55.648079, 38.859714], {
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
                var squarePlacemark_r_up2 = new ymaps.Placemark(
                 [55.648079, 38.859976], {
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
                 [55.648079, 38.859190], {
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
                var squarePlacemark_l_up2 = new ymaps.Placemark(
                 [55.648079, 38.858928], {
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

                // Второй сверху ярус квадратов, от центрального:
                // Центральный квадрат в ярусе.
                var squarePlacemark_up_1 = new ymaps.Placemark(
                 [55.648225, 38.859452], {
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
                var squarePlacemark_r_up_1 = new ymaps.Placemark(
                 [55.648225, 38.859714], {
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
                var squarePlacemark_r_up_2 = new ymaps.Placemark(
                 [55.648225, 38.859976], {
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
                var squarePlacemark_l_up_1 = new ymaps.Placemark(
                 [55.648225, 38.859190], {
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
                var squarePlacemark_l_up_2 = new ymaps.Placemark(
                 [55.648225, 38.858928], {
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
                // Завершаем построение второго сверху яруса квадратов, от центрального.

                // Первый снизу ярус квадратов, от центрального:
                // Центральный квадрат в ярусе.
                var squarePlacemark_down1 = new ymaps.Placemark(
                 [55.647787, 38.859452], {
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
                 [55.647787, 38.859714], {
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
                var squarePlacemark_r_down2 = new ymaps.Placemark(
                 [55.647787, 38.859976], {
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
                 [55.647787, 38.859190], {
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
                var squarePlacemark_l_down2 = new ymaps.Placemark(
                 [55.647787, 38.858928], {
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

                // Второй снизу ярус квадратов, от центрального: Тестово делаем его в ввиде белых квадратиков. Используя второй шаблон, для пустых участков леса.
                // Центральный квадрат в ярусе.
                var squarePlacemark_down_1 = new ymaps.Placemark(
                 [55.647641, 38.859452], {
                   hintContent: 'Здесь Вы можете посадить лес'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   //iconLayout: square_layout1,
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
                var squarePlacemark_r_down_1 = new ymaps.Placemark(
                 [55.647641, 38.859714], {
                   hintContent: 'Здесь Вы можете посадить лес'
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
                var squarePlacemark_r_down_2 = new ymaps.Placemark(
                 [55.647641, 38.859976], {
                    hintContent: 'Здесь Вы можете посадить лес'
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
                var squarePlacemark_l_down_1 = new ymaps.Placemark(
                 [55.647641, 38.859190], {
                   hintContent: 'Здесь Вы можете посадить лес'
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
                var squarePlacemark_l_down_2 = new ymaps.Placemark(
                 [55.647641, 38.858928], {
                   hintContent: 'Здесь Вы можете посадить лес'
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
                // Завершаем построение второго снизу яруса квадратов, от центрального.

                // Завершаем построение шаблона засаженного участка леса. В виде площади в квадратах.

                /*
                // Показываем хинт на карте (c привязкой к геообъекту).
                myMap.hint.open([48.234599, 40.699303], "Площадь высадки леса - 3 га", {
                  // Опция: задержка перед открытием.
                  showTimeout: 1500
                });
                */

                // Добавляем коллекцию квадратов, с примерной площадью посаженного леса. В геоколлекцию.
                myGeoObjects
                   // Первый ярус от центра по горизонтали и вертикали.
                   .add(squarePlacemark).add(squarePlacemark1).add(squarePlacemark1_2).add(squarePlacemark2).add(squarePlacemark2_2)
                   // Первый сверху ярус квадратов, от центрального:
                   .add(squarePlacemark_up1).add(squarePlacemark_r_up1).add(squarePlacemark_r_up2).add(squarePlacemark_l_up1).add(squarePlacemark_l_up2)
                   // Второй сверху ярус квадратов, от центрального:
                   .add(squarePlacemark_up_1).add(squarePlacemark_r_up_1).add(squarePlacemark_r_up_2).add(squarePlacemark_l_up_1).add(squarePlacemark_l_up_2)
                   // Первый снизу ярус квадратов, от центрального:
                   .add(squarePlacemark_down1).add(squarePlacemark_r_down1).add(squarePlacemark_r_down2).add(squarePlacemark_l_down1).add(squarePlacemark_l_down2)
                   // Второй снизу ярус квадратов, от центрального:
                   .add(squarePlacemark_down_1).add(squarePlacemark_r_down_1).add(squarePlacemark_r_down_2).add(squarePlacemark_l_down_1).add(squarePlacemark_l_down_2)
                   // И в конце добавляем в геоколлекцию круг, с площадью посадки.
                   .add(myCircle);
