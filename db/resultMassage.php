<?php 

// dataType 'Json'과 일치해야 합니다
class ResultMassage {
    // 회원가입 아이디 중복 여부
    public const ID_OVERLAP = 101; 
    public const ID_NONE_OVERLAP = 102;
    // 회원가입 성공 여부
    public const SIGNUP_SUCCESS = 201;
    public const SIGNUP_FAIL = 202;
    // 로그인 성공 여부
    public const LOGIN_SUCCESS = 301;
    public const LOGIN_FAIL = 302;

    public function ResultCheck($resultCode, $error = null, $resultData = null)
    {
        switch($resultCode)
        {
            case $this::ID_OVERLAP:
            case $this::ID_NONE_OVERLAP:
            case $this::SIGNUP_SUCCESS:
            case $this::LOGIN_SUCCESS:
            case $this::LOGIN_FAIL:
                $this->EchoJsonEncoder(array('result'=> $resultCode));
                break;
            case $this::SIGNUP_FAIL:
                $this->SignupFail($error);
                break;
        }
    }
    private function EchoJsonEncoder($objctArray)
    {
        echo json_encode($objctArray);
    }
    private function SignupFail($error){
        $this->EchoJsonEncoder(array('result'=> $this::SIGNUP_FAIL));
        if($error != null)
            $this->EchoJsonEncoder(array('error'=> $error));
    }
}

?>