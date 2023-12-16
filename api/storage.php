<?php

function sendit($url,$customrequest = 'GET',$body = 0,$headers = 0,$userpwd = 0)
{
 $ch = curl_init();
 curl_setopt($ch,CURLOPT_URL, $url);
 curl_setopt($ch, CURLOPT_CUSTOMREQUEST,$customrequest);
 $headers === 0 ? curl_setopt($ch,CURLOPT_HTTPHEADER,['Content-Type:application/json;charset=utf-8']) : curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
 curl_setopt($ch,CURLOPT_POST,$body === 'POST'? true : false);
 $body === 0 ? 0 : curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($body));
 $userpwd === 0 ? 0 : curl_setopt($ch,CURLOPT_USERPWD, $userpwd);
 curl_setopt($ch,CURLOPT_HEADER, false);
 curl_setopt($ch,CURLOPT_USERAGENT,'User-Agent');
 curl_setopt($ch, CURLOPT_ENCODING, '');
 curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
 $http = (substr($url,0,5) === "https") ? false : true;
 curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, $http);
 curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
 curl_setopt($ch, CURLOPT_TIMEOUT, 60);
 curl_setopt($ch,CURLOPT_FOLLOWLOCATION,true);
 
return json_decode(curl_exec($ch),true);
//remember some endpoints return string only;
}

function dropbox_access_token()
{
$dropbox_refresh = $_ENV['dropbox_refresh'];
$dropbox_app = $_ENV['dropbox_app'];
$dropbox_secret = $_ENV['dropbox_secret'];

$auth = 'https://api.dropboxapi.com/oauth2/token?grant_type=refresh_token&refresh_token='.$dropbox_refresh;

$tok = sendit($auth,'POST',0,0,$dropbox_app.':'.$dropbox_secret);

if(!empty($tok['access_token']))
return $tok['access_token'];

return $tok;
}


function dropbox_download($token,$file = '/jsproject/db.txt')
{
$endpoint_download = 'https://content.dropboxapi.com/2/files/download';

$header_download = 
[
"authorization:bearer ".$token,
'Dropbox-Api-Arg:{"path":"'.$file.'"}',
"content-type:text/plain"
];

$result = sendit($endpoint_download,'POST',0,$header_download);

if(empty($result["error"]))
return $result;

return 0;
}


function dropbox_upload($token,$data,$file='/jsproject/db.txt')
{
$endpoint_upload = 'https://content.dropboxapi.com/2/files/upload';

$header_upload = 
[
'authorization:bearer '.$token,
'Dropbox-Api-Arg:{"path":"'.$file.'","mode":{".tag":"overwrite"}}',
"content-type:application/octet-stream"
];

$result = sendit($endpoint_upload,'POST',$data,$header_upload);

if(empty($result["error"]))
return 1;

return 0;
}

?>
