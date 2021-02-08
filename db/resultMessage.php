<?php 

// dataType 'Json'과 일치해야 합니다
class ResultMessage {
    // 회원가입 아이디 중복 여부
    public const ID_OVERLAP = 101; 
    public const ID_NONE_OVERLAP = 102;
    // 회원가입 성공 여부
    public const SIGNUP_SUCCESS = 201;
    public const SIGNUP_FAIL = 202;
    // 로그인 성공 여부
    public const LOGIN_SUCCESS = 301;
    public const LOGIN_FAIL_ID = 302;
    public const LOGIN_FAIL_PASSWORD = 303;
    public const LOGOUT_SUCCESS = 401;

    public function ResultCheck($resultCode, $error = null, $resultData = null)
    {
        switch($resultCode)
        {
            // 기본 코드만 전송
            case $this::ID_OVERLAP:
            case $this::ID_NONE_OVERLAP:
            case $this::SIGNUP_SUCCESS:
            case $this::LOGIN_FAIL_ID:
            case $this::LOGIN_FAIL_PASSWORD:
            case $this::LOGOUT_SUCCESS:
                $this->EchoJsonEncoder(array('result'=> $resultCode));
                break;
            // 기본 코드 + resultData 전송
            case $this::LOGIN_SUCCESS:
                $this->EchoResultData($resultCode, $resultData);
                break;

            // 기본 코드 + eeror 전송
            case $this::SIGNUP_FAIL:
                $this->EchoError($resultCode, $error);
                break;
        }
    }
    public function ResultMessages($result)
    {
        echo json_encode($result);
    }
    private function EchoJsonEncoder($objctArray)
    {
        echo json_encode($objctArray);
    }
    private function EchoResultData($resultCode, $resultData)
    {
        if($resultData != null)
        {
            $this->EchoJsonEncoder(array('result'=> $resultCode,
            'resultData'=> $resultData));
        }
    }
    private function EchoError($resultCode, $error)
    {
        if($error != null)
        {
            $this->EchoJsonEncoder(array('result'=> $resultCode, 
            'error'=> $error));
        }
    }   
}

?>