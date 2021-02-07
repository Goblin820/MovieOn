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
    echo 'DB 접속 성공\n';
}

// DB 선택
// mysqli_select_db($connect, 데이터베이스 이름) or die('DB 선택 실패');

// SQL Query 실행
// mysqli_query($connect, 쿼리문)

// mysqli_fetch_array()
?>