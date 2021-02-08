<?php
require_once "./sqlConnect.php";
require_once "./resultMessage.php";

$resultMessage = new ResultMessage();

$id = $_REQUEST['id'];
$password = $_REQUEST['password'];

$query = "SELECT * FROM user_signdata WHERE id='$id'";
$result = mysqli_query($connect, $query);
if($result){

    $selectData = $result->fetch_array();
    // $resultMessage->ResultMessages($selectData['password']);

    // 아이디 있음
    if($selectData >= 1){
        $dbId = $selectData['id'];
        $dbPassword = password_hash($selectData['password'], PASSWORD_DEFAULT);
        // $password == $selectData['password']
        if(password_verify($password , $dbPassword)){
            session_start();
            $_SESSION['id'] = $dbId;
            $resultMessage->ResultCheck(ResultMessage::LOGIN_SUCCESS, null, $dbId);
        }
        else{
            $resultMessage->ResultCheck(ResultMessage::LOGIN_FAIL_PASSWORD);
        }
    }
    // 아이디 없음
    else{
        $resultMessage->ResultCheck(ResultMessage::LOGIN_FAIL_ID);
    }
}
else{
    $resultMessage->ResultMessages("실패 : 'mysqli_error($connect)'");
}

?>