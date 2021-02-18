<?php

header('Content-Type: text/html; charset=utf-8');

$mysqlHost = 'localhost';
$mysqlId = 'goblin820';
$mysqlPassword = 'qnrudwns820!@';
$mysqlDBName = 'goblin820_godohosting_com';
$connect = mysqli_connect($mysqlHost, $mysqlId, $mysqlPassword, $mysqlDBName);

if(mysqli_connect_errno()){
    die('SQL Connect Error: '. mysqli_connect_error());
}
else{
    // echo '디비 연결 성공';
}

?>