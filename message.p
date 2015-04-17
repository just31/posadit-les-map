@main[][]

^if(def $form:threes){

$threes[^untaint{$form:threes}]
$name[^untaint{$form:name}]
$address[^untaint{$form:address}] 
$pojelania[^untaint{$form:pojelania}] 

$file[$form:image]
^if($form:image is "file"){
^file.save[binary;/f/min/posadit-les/img/zakaz_forest.jpg] 
}

^if(def $form:phone){
$phone[^untaint{$form:phone}] 
}

^if($name_zakaz ne '0'){
$dtNow[^date::now[]]
^mail:send[
      $.to[<emoiseev@russiancarbon.org>]
      $.from[^if(^Lib:isEmail[$form:email]){$form:email}{$sFrom}]
      $.charset[$response:charset]
      $.subject[Новый заказ на посадку леса с сайта http://$env:SERVER_NAME/] 
      $.html{
        <b style="color: #5cb85c;">Имя заказчика:</b> <b style="color: #99490E;">$name</b> 
        <br /><b style="color: #5cb85c;">Количество саженцев:</b> <b style="color: #99490E;">$threes</b> 
        <br /><b style="color: #5cb85c;">Адрес заказчика:</b> <b style="color: #99490E;">$address</b> 
        <br /><b style="color: #5cb85c;">Телефон:</b> <b style="color: #99490E;">$phone</b> 
        <br /><b style="color: #5cb85c;">Особые пожелания:</b> <b style="color: #99490E;">$pojelania</b>
        <br /><br /><b style="color: #5cb85c;">Сообщение отправлено:</b> <b style="color: #99490E;">^dtNow.sql-string[]</b> 
      } 
      ^if($form:image is "file"){
        $.file[
          $.value[$form:image] 
          $.name[Прикрепленный_к_сообщению_файл.jpg] 
          $.content-id[file_or_pic_1] 
        ] 
      }
]
$result[]
}

}

<div id="myModal" class="modal fade"><div class="modal-dialog"><div class="modal-content">
<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myModalLabel" style="color: #4cae4c !important;">Оформление заказа на посадку леса</h4></div>
<form id="contact" name="contact" method="post" enctype="multipart/form-data" action="#" style="margin-left: 20px; margin-top: 10px; margin-bottom: 10px;">
<div class="form-group has-success"><label class="control-label" for="threes" style="font-size: 14px; color: #6B8E23;">Укажите кол-во саженцев <b style="color: red;">*</b></label><div class="controls"><input id="threes" name="threes" type="text" placeholder="5" class="input-xlarge" style="color: #000000 !important;" /></div></div>
<div class="form-group has-success"><label class="control-label" for="name" style="font-size: 12px; color: #6B8E23;">Ваше имя <b style="color: red;">*</b></label><div class="controls"><input id="name" name="name" type="text" placeholder="" class="input-xlarge" style="color: #000000 !important;" /></div></div>
<div class="form-group has-success" style="margin-top: 5px;"><label class="control-label" for="email" style="font-size: 12px; color: #6B8E23;">Контактный email <b style="color: red;">*</b></label><div class="controls"><input id="email" name="email" type="text" placeholder="email" class="input-xlarge" style="color: #000000 !important;" /></div></div>
<div class="form-group has-success" style="margin-top: 5px;"><label class="control-label" for="address" style="font-size: 12px; color: #6B8E23;">Адрес доставки саженцев <b style="color: red;">*</b></label><div class="controls"><input id="address" name="address" type="text" placeholder="" class="input-xlarge" style="color: #000000 !important;" /></div></div>
<div class="control-group" style="margin-top: 5px;"><label class="control-label" for="phone" style="font-size: 12px; color: #6B8E23;">Ваш телефон</label><div class="controls"><input id="phone" name="phone" type="text" placeholder="(+7)" class="input-xlarge" /></div></div>
<div class="control-group" style="margin-top: 5px;"><label class="control-label" for="pojelania" style="font-size: 12px; color: #6B8E23;">Особые пожелания</label><div class="controls"><textarea id="pojelania" name="pojelania" rows="5" cols="54" style="color: #000000 !important;"></textarea></div></div>
<br />
<div class="control-group">
 <div class="controls clearfix">
  <span class="btn btn-warning btn-file">
    <i class="ico-moon-plus"> </i><span>Прикрепить картинку к сообщению...</span>
    <input type="file" name="image" id="image" onchange='document.getElementById("fileName").value=this.value' />
  </span>
 </div>
</div>
<div class="type_file">
 <input class="inputFileVal" readonly="readonly" id="fileName" name="fileName" type="text" />
</div>
<input class="btn btn-success" id="send" name="send" type="submit" value="Оформить заказ" style="margin-top: 10px;" />
</form>
<div style="margin-left: 20px; margin-bottom: 10px !important; color: red !important;"><small>Заполните все обязательные поля, отмеченные звездочкой.</small><br /></div>
</div>
<div></div>
</div></div>

# check email format
@isEmail[sEmail][result]
$result(
	def $sEmail
	&& ^sEmail.pos[@] > 0
	&& ^sEmail.match[^^(?:[-a-z\d\+\*\/\?!{}`~_%&'=^^^$#]+(?:\.[-a-z\d\+\*\/\?!{}`~_%&'=^^^$#]+)*)@(?:[-a-z\d_]+\.){1,60}[a-z]{2,6}^$][i]
)
#end @isEmail[]

# метод проверяет заполненность полей формы. если все хорошо - возвращает true
@isOk[]
$result(def $form:threes && def $form:name && def $form:email && def $form:address)
#end @isOk[]
