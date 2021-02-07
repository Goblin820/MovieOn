<?php 



require_once './sqlConnect.php';

$id = $_REQUEST['id'];

$password = $_REQUEST['password'];
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$nickname = $_REQUEST['nickname'];
$birth = $_REQUEST['birth'];

echo ' id: '.$id;
echo ' password: '.$password;

// $resultMode = 
$query = "INSERT INTO test1 (id, password, name, birth) 
VALUES ('$id', '$password', '$name', '$birth')";
$result = mysqli_query($connect, $query);
if($result)
{
    echo ' 테이블 데이터 쓰기 완료 ';
}
else{
    echo ' 테이블 데이터 쓰기 실패: '. mysqli_error($connect);
}
?>
