<?php
require_once "./sqlConnect.php";
require_once "./resultMessage.php";

$resultMessage = new ResultMessage();

error_reporting(E_ALL);
ini_set("display_errors", 1);

session_start();
$id = $_SESSION['id'];

if($id == null || $id == '')
    $resultMessage->ResultMessages('myPage error : Session None Id');    

$query = "SELECT * FROM user_signdata WHERE id='$id'";
$queryEtc = "SELECT * FROM user_bookmark WHERE id='$id'";
$result = mysqli_query($connect, $query);
$resultEtc = mysqli_query($connect, $queryEtc);

if($result){
    $selectData = $result->fetch_array();
    $name = '';
    $email = '';
    $nickname = '';
    $birth = '';
    $point = 0;
    
    if($selectData >= 1){
        $name = $selectData['name'];
        $email = $selectData['email'];
        $nickname = $selectData['nickname'];
        $birth = $selectData['birth'];
    }
    else{
        $resultMessage->ResultMessages('myPage error : Table user_signdata Not Find Id');    
    }

    $selectEtcData = $resultEtc->fetch_array();
    if($selectEtcData >= 1){
        $point = $selectEtcData['point'];
    }
    else{
        $resultMessage->ResultMessages('myPage error : Table user_signdata Not Find Id');    
    }

    $resultData = array('resultData' => array('name' => $name, 'email' => $email, 'nickname' => $nickname, 'birth' => $birth, 'point' => $point));
    $echoData = json_encode($resultData);
    echo $echoData;
}
else{
    $resultMessage->ResultMessages("실패 : 'mysqli_error($connect)'");
}

?>