<?php 

require_once './sqlConnect.php';
require_once './resultMessage.php';

$resultMessage = new ResultMessage();

$id = $_REQUEST['id'];
$password = $_REQUEST['password'];
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$nickname = $_REQUEST['nickname'];
$birth = $_REQUEST['birth'];

$query = "INSERT INTO user_signdata (id, password, name, email, nickname, birth) 
VALUES ('$id', '$password', '$name', '$email', '$nickname', '$birth')";

$result = mysqli_query($connect, $query);
if($result)
{
    $rand = rand(100, 5000);
    $query = "insert into user_bookmark (id, point) values('$id', '$rand')";
    $result = mysqli_query($connect, $query);

    if($result)
    {
        $resultMessage->ResultCheck(ResultMessage::SIGNUP_SUCCESS);
    }
    
}
else{
    $resultMessage->ResultCheck(ResultMessage::SIGNUP_FAIL, mysqli_error($connect));
}


?>
