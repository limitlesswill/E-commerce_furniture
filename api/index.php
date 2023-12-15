<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$products = 
  '{
  "kitchen":[
  {"id":"0","title":"title placeholder","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"},
  {"id":"1","title":"title placeholder","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}
  ],
  "diningtable":[
  {"id":"0","title":"title placeholder","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"},
  {"id":"1","title":"title placeholder","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}
  ],
  "office":[
  {"id":"0","title":"title placeholder","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"},
  {"id":"1","title":"title placeholder","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}
  ],
  "beds":[
  {"id":"0","title":"title placeholder","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"},
  {"id":"1","title":"title placeholder","thumbnail":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}
  ]
  }';



echo $products;

?>
