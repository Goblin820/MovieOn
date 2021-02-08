<?php 

require_once './sqlConnect.php';
require_once './resultMassage.php';

$resultMesaage = new ResultMassage();

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
    $query = "insert into user_bookmark (id) values('$id')";
    $result = mysqli_query($connect, $query);

    if($result)
    {
        $resultMesaage->ResultCheck(ResultMassage::SIGNUP_SUCCESS);
    }
    
}
else{
    $resultMesaage->ResultCheck(ResultMassage::SIGNUP_FAIL, mysqli_error($connect));
}


?>
