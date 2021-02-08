<?php 

require_once './sqlConnect.php';
require_once './resultMassage.php';

$resultMassage = new ResultMassage();

$id = $_REQUEST['id'];

$query = "SELECT id FROM user_signdata where id='$id'" ;
$result = mysqli_query($connect, $query);
if($result)
{
    $idSelectData = $result->fetch_array();
    // 중복 된다면
    if($idSelectData >= 1)
    {
        $resultMassage->ResultCheck(ResultMassage::ID_OVERLAP);
    }
    else{
        $resultMassage->ResultCheck(ResultMassage::ID_NONE_OVERLAP);
    }
}
else{
    echo '실패 : '. mysqli_error($connect);
}

?>