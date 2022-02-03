<?php
// https://www.youtube.com/watch?v=yTeI_crd7TE&t=92s
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$quest = $_POST['quest']; // Берём данные из input c атрибутом name="textarea"

$token = "1402862160:AAEooveTLZMLEVNIQrCLXgn5x5Vm1tOgy6w"; // Тут пишем токен
$chat_id = "-1001482962937"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "amberhappiness.ru"; //Указываем название сайта

$arr = array(

  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение:' => $quest
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>