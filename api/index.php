<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$products = 
'[
{"category":"kitchen","id":"0","name":"a table","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"},
{"category":"diningtable","id":"1","name":"a table","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"},
{"category":"office","id":"2","name":"a table","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"},
{"category":"beds","id":"3","name":"a table","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}
]';



echo $products;

?>
