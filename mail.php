<?php

if (isset($_POST['name']) && isset($_POST['phone'])) {

    $name = strip_tags($_POST['name']);
    $name = htmlspecialchars($name);

    $phone = strip_tags($_POST['phone']);
    $phone = htmlspecialchars($phone);



    $to      = 'andrey_groza@mail.ru';
    $subject = 'Заявка с сайта unexpert.ru';
    $message = 'hello';
    $headers = array(
        'From' => 'info@unexpert.ru',
        'Reply-To' => 'info@unexpert.ru'
    );

     if (mail($to, $subject, $message, $headers)) {
     } else {
         die(header("HTTP/1.0 520 Unknown error"));
     }

}