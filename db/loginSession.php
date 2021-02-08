<?php 
require_once "./resultMessage.php";

$resultMessage = new ResultMessage();

session_start();

$id = $_REQUEST['id'];
if($id == 'null')
{
    $_SESSION['id'] = '';
    $resultMessage->ResultCheck(ResultMessage::LOGOUT_SUCCESS);
}
else{
    echo $_SESSION['id'];
}


?>