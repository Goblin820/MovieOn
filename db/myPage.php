<?php
require_once "./sqlConnect.php";
require_once "./resultMessage.php";

$resultMessage = new ResultMessage();


session_start();
$id = $_SESSION['id'];


if($id == null || $id == '')
    $resultMessage->ResultMessages('myPage error : Session None Id');    

$query = "SELECT * FROM user_signdata WHERE id='$id'";
$result = mysqli_query($connect, $query);
if($result){

    $selectData = $result->fetch_array();

    if($selectData >= 1){
        // $name = 
        // $email =
        // $nickname = 
        // $birth = 

    }
    else{
        $resultMessage->ResultMessages('myPage error : Not Find Id');    
    }
}
else{
    $resultMessage->ResultMessages("실패 : 'mysqli_error($connect)'");
}

?>