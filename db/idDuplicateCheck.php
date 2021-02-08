<?php 

require_once './sqlConnect.php';
require_once './resultMessage.php';

$resultMassage = new ResultMessage();

$id = $_REQUEST['id'];

$query = "SELECT id FROM user_signdata where id='$id'" ;
$result = mysqli_query($connect, $query);
if($result)
{
    $selectData = $result->fetch_array();
    // 중복 된다면
    if($selectData >= 1)
    {
        $resultMassage->ResultCheck(ResultMessage::ID_OVERLAP);
    }
    else{
        $resultMassage->ResultCheck(ResultMessage::ID_NONE_OVERLAP);
    }
}
else{
    echo '실패 : '. mysqli_error($connect);
}

?>