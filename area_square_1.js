                // Данная функция, отслеживает событие клика по кнопке "Заказать посадку леса". В балуне пустого участка. При получении события выводит модальное окно с формой.
                function Show_zakaz() {
                  //alert("Клик по кнопке произошел. Оформляйте заказ!");
                  /*
                  $(".main").append('<div id="myModal" class="modal fade"><div class="modal-dialog"><div class="modal-content">' +
                  '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myModalLabel" style="color: #594540 !important;">Оформление заказа на посадку леса</h4></div>' +
                  '<div class="modal-body" style="color: #696969 !important;"><form id="contact" name="contact" action="/posadit-les/" method="get" enctype="multipart/form-data" target=_blank>' +
                  '<div class="control-group"><label class="control-label" for="threes" style="font-size: 14px; color: #6B8E23;">Укажите кол-во саженцев <b style="color: red;">*</b></label><div class="controls"><input id="threes" name="threes" type="text" placeholder="5" class="input-xlarge"></div></div><br />' +
                  '<div class="control-group"><label class="control-label" for="name" style="font-size: 12px; color: #6B8E23;">Ваше имя <b style="color: red;">*</b></label><div class="controls"><input id="name" name="name" type="text" placeholder="" class="input-xlarge"></div></div>' +
                  '<div class="control-group" style="margin-top: 5px;"><label class="control-label" for="email" style="font-size: 12px; color: #6B8E23;">Контактный email <b style="color: red;">*</b></label><div class="controls"><input id="email" name="email" type="text" placeholder="email" class="input-xlarge"></div></div>' +
                  '<div class="control-group" style="margin-top: 5px;"><label class="control-label" for="address" style="font-size: 12px; color: #6B8E23;">Адрес доставки саженцев <b style="color: red;">*</b></label><div class="controls"><input id="address" name="address" type="text" placeholder="" class="input-xlarge"></div></div>' +
                  '<div class="control-group" style="margin-top: 5px;"><label class="control-label" for="phone" style="font-size: 12px; color: #6B8E23;">Ваш телефон</label><div class="controls"><input id="phone" name="phone" type="text" placeholder="(+7)" class="input-xlarge"></div></div>' +
                  //'<div class="control-group" style="margin-top: 5px;"><label class="control-label" for="singlebutton-0"></label><div class="controls"><button id="send" name="send" value class="btn btn-success">Отправить</button></div></div>' +
                  '<br /><input class="btn btn-success" id="send" type="submit" value="Оформить заказ">' +
                  //'<input type="hidden" name="send_zakaz" value="send_zakaz">' +
                  '</form></div>' +
                  '<div class="modal-footer" style="text-align: justify !important; color: #8B0000; !important;"><small>Заполните все обязательные поля, отмеченные звездочкой.</small></div></div></div</div>');
                  */
                  //$("#myModal").modal('show');
                  /*
                  $("#myModalBox #send").on("click", function(){
                     //alert("Клик по кнопке произошел");
                     //var address = $("#address").val();
                     //console_log("Ваш адрес:", address);
                     //alert("Ваш адрес:", address);
                  });
                  */
                }
                // Создаем коллекцию геообъектов и задаем опции.
                var myGeoObjects = new ymaps.GeoObjectCollection([48.234599, 40.699303]);

                // Создаем круг, с площадью посаженного участка леса. Будем добавлять в него, квадраты.
                var myCircle = new ymaps.Circle([
                // Координаты центра круга.
                [48.234599, 40.699303],
                  // Радиус круга в метрах.
                  97
                ], {
                // Описываем свойства круга.
                // Содержимое балуна.
                balloonContent: "Площадь высадки леса - 3 га",
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
                 [48.234599, 40.699303], {
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
                 [48.234599, 40.699565], {
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
                 [48.234599, 40.699827], {
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
                var squarePlacemark1_3 = new ymaps.Placemark(
                 [48.234599, 40.700089], {
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
                var squarePlacemark1_4 = new ymaps.Placemark(
                 [48.234599, 40.700352], {
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
                 [48.234599, 40.699040], {
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
                 [48.234599, 40.698783], {
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
                var squarePlacemark2_3 = new ymaps.Placemark(
                 [48.234599, 40.698523], {
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
                var squarePlacemark2_4 = new ymaps.Placemark(
                 [48.234599, 40.698259], {
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
                 [48.234769, 40.699303], {
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
                 [48.234769, 40.699565], {
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
                 [48.234769, 40.699827], {
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
                var squarePlacemark_r_up3 = new ymaps.Placemark(
                 [48.234769, 40.700089], {
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
                var squarePlacemark_r_up4 = new ymaps.Placemark(
                 [48.234769, 40.700352], {
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
                 [48.234769, 40.699040], {
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
                 [48.234769, 40.698783], {
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
                var squarePlacemark_l_up3 = new ymaps.Placemark(
                 [48.234769, 40.698523], {
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
                var squarePlacemark_l_up4 = new ymaps.Placemark(
                 [48.234769, 40.698259], {
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
                 [48.234943, 40.699303], {
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
                 [48.234943, 40.699565], {
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
                 [48.234943, 40.699827], {
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
                var squarePlacemark_r_up_3 = new ymaps.Placemark(
                 [48.234943, 40.700089], {
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
                var squarePlacemark_r_up_4 = new ymaps.Placemark(
                 [48.234943, 40.700352], {
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
                 [48.234943, 40.699040], {
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
                 [48.234943, 40.698783], {
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
                var squarePlacemark_l_up_3 = new ymaps.Placemark(
                 [48.234943, 40.698523], {
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
                var squarePlacemark_l_up_4 = new ymaps.Placemark(
                 [48.234943, 40.698259], {
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
                 [48.234425, 40.699303], {
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
                 [48.234425, 40.699565], {
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
                 [48.234425, 40.699827], {
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
                var squarePlacemark_r_down3 = new ymaps.Placemark(
                 [48.234425, 40.700089], {
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
                var squarePlacemark_r_down4 = new ymaps.Placemark(
                 [48.234425, 40.700352], {
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
                 [48.234425, 40.699040], {
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
                 [48.234425, 40.698783], {
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
                var squarePlacemark_l_down3 = new ymaps.Placemark(
                 [48.234425, 40.698523], {
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
                var squarePlacemark_l_down4 = new ymaps.Placemark(
                 [48.234425, 40.698259], {
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
                 [48.234252, 40.699303], {
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
                 [48.234252, 40.699565], {
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
                 [48.234252, 40.699827], {
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
                var squarePlacemark_r_down_3 = new ymaps.Placemark(
                 [48.234252, 40.700089], {
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
                var squarePlacemark_r_down_4 = new ymaps.Placemark(
                 [48.234252, 40.700351], {
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
                 [48.234252, 40.699040], {
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
                 [48.234252, 40.698783], {
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
                var squarePlacemark_l_down_3 = new ymaps.Placemark(
                 [48.234252, 40.698523], {
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
                var squarePlacemark_l_down_4 = new ymaps.Placemark(
                 [48.234252, 40.698263], {
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
                // Добавим тестово один пустой квадрат к карте. С возможностью размещения в его балуне, кнопки "Оформить заказ".
                // И обработки клика по ней.
                // Центральный квадрат в ярусе.
                var squarePlacemark_down_empty = new ymaps.Placemark(
                 [48.234065, 40.699303], {
                   hintContent: 'Здесь Вы можете посадить лес',
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: square_layout1,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                /*
                // Центральный квадрат в ярусе.
                var squarePlacemark_down_1 = new ymaps.Placemark(
                 [48.234243, 40.699303], {
                   hintContent: 'Здесь Вы можете посадить лес'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: square_layout1,
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
                 [48.234243, 40.699565], {
                   hintContent: 'Здесь Вы можете посадить лес'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: square_layout1,
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
                 [48.234243, 40.699827], {
                    hintContent: 'Здесь Вы можете посадить лес'
                   //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: square_layout1,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                var squarePlacemark_r_down_3 = new ymaps.Placemark(
                 [48.234243, 40.700089], {
                  hintContent: 'Здесь Вы можете посадить лес'
                  //balloonContent: 'Площадь высадки леса - 35 га'
                 }, {
                   iconLayout: square_layout1,
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
                 [48.234243, 40.699040], {
                   hintContent: 'Здесь Вы можете посадить лес'
                   //balloonContent: 'Площадь высадки леса - 37 га'
                 }, {
                   iconLayout: square_layout1,
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
                 [48.234243, 40.698783], {
                   hintContent: 'Здесь Вы можете посадить лес'
                   //balloonContent: 'Площадь высадки леса - 37 га'
                 }, {
                   iconLayout: square_layout1,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                var squarePlacemark_l_down_3 = new ymaps.Placemark(
                 [48.234243, 40.698523], {
                   hintContent: 'Здесь Вы можете посадить лес'
                   //balloonContent: 'Площадь высадки леса - 37 га'
                 }, {
                   iconLayout: square_layout1,
                   iconShape: {
                   type: 'Rectangle',
                     // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                     coordinates: [
                       [-25, -25], [25, 25]
                     ]
                   }
                 }
                );
                */
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
                   .add(squarePlacemark).add(squarePlacemark1).add(squarePlacemark1_2).add(squarePlacemark1_3).add(squarePlacemark1_4).add(squarePlacemark2).add(squarePlacemark2_2).add(squarePlacemark2_3).add(squarePlacemark2_4)
                   // Первый сверху ярус квадратов, от центрального:
                   .add(squarePlacemark_up1).add(squarePlacemark_r_up1).add(squarePlacemark_r_up2).add(squarePlacemark_r_up3).add(squarePlacemark_r_up4).add(squarePlacemark_l_up1).add(squarePlacemark_l_up2).add(squarePlacemark_l_up3).add(squarePlacemark_l_up4)
                   // Второй сверху ярус квадратов, от центрального:
                   .add(squarePlacemark_up_1).add(squarePlacemark_r_up_1).add(squarePlacemark_r_up_2).add(squarePlacemark_r_up_3).add(squarePlacemark_r_up_4).add(squarePlacemark_l_up_1).add(squarePlacemark_l_up_2).add(squarePlacemark_l_up_3).add(squarePlacemark_l_up_4)
                   // Первый снизу ярус квадратов, от центрального:
                   .add(squarePlacemark_down1).add(squarePlacemark_r_down1).add(squarePlacemark_r_down2).add(squarePlacemark_r_down3).add(squarePlacemark_r_down4).add(squarePlacemark_l_down1).add(squarePlacemark_l_down2).add(squarePlacemark_l_down3).add(squarePlacemark_l_down4)
                   // Второй снизу ярус квадратов, от центрального:
                   .add(squarePlacemark_down_1).add(squarePlacemark_r_down_1).add(squarePlacemark_r_down_2).add(squarePlacemark_r_down_3).add(squarePlacemark_r_down_4).add(squarePlacemark_l_down_1).add(squarePlacemark_l_down_2).add(squarePlacemark_l_down_3).add(squarePlacemark_l_down_4)
                   // Добавляем пустой квадрат к карте.
                   .add(squarePlacemark_down_empty)
                   // И в конце добавляем в геоколлекцию круг, с площадью посадки.
                   .add(myCircle);
