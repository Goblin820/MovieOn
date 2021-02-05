// ------------- jquery ui datepicker 설정 ------------- //
function InitDatePicker() {
  $('#signup-datePicker').datepicker({
    showAnim: 'slideDown',
    dateFormat: 'yy-mm-dd', //Input Display Format 변경
    showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    showMonthAfterYear: true, //년도 먼저 나오고, 뒤에 월 표시
    changeYear: true, //콤보박스에서 년 선택 가능
    changeMonth: true, //콤보박스에서 월 선택 가능
    showOn: 'both', //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
    buttonImage:
      'http://jqueryui.com/resources/demos/datepicker/images/calendar.gif', //버튼 이미지 경로
    buttonImageOnly: true, //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
    buttonText: '선택', //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
    yearSuffix: ' / ', //달력의 년도 부분 뒤에 붙는 텍스트
    yearRange: '1920:2999',
    monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ], //달력의 월 부분 텍스트
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], //달력의 요일 부분 텍스트
    dayNames: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ], //달력의 요일 부분 Tooltip 텍스트
    // minDate: '-1M', //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    maxDate: '0', //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
  });
}

// ------------- 인풋 포커스 관련 ------------- //
const signupInputcontentSelector = $('.signup-input-content');
const signupLabelSelctorName = '.signup-label';
const signupLabelSelctor = $(signupLabelSelctorName);

// 인풋 포커스에 따라 라벨 색상을 변경시켜준다
function FocusInput() {
  signupInputcontentSelector.children('input').focus(function () {
    signupLabelSelctor.css('color', 'gray');
    $(this).siblings(signupLabelSelctorName).css('color', '#d09f67');
  });
}

// ------------- 정규 표현식 --------------- //

// 필요 데이터 생성자 함수화
function SignupData() {
  this.userData = {
    id: '',
    password: '',
    passwordRe: '',
    name: '',
    nickname: '',
    email: '',
    birth: '',
  };
  this.$inputs = {
    id: null,
    password: null,
    passwordRe: null,
    name: null,
    nickname: null,
    email: null,
    birth: null,
  };
  this.$warningLabels = {
    id: null,
    password: null,
    passwordRe: null,
    name: null,
    nickname: null,
    email: null,
    brith: null,
  };
}
// 데이터 초기화
const signupData = new SignupData();
signupData.$inputs.id = $('input[name=userId]');
signupData.$inputs.password = $('input[name=userPassword]');
signupData.$inputs.passwordRe = $('input[name=userPasswordRe]');
signupData.$inputs.name = $('input[name=userName]');
signupData.$inputs.nickname = $('input[name=userNickname]');
signupData.$inputs.email = $('input[name=userEmail]');
signupData.$inputs.birth = $('input[name=userBirth]');

signupData.$warningLabels.id = $('#warning-userId');
signupData.$warningLabels.password = $('#warning-userPassword');
signupData.$warningLabels.passwordRe = $('#warning-userPassword-re');
signupData.$warningLabels.name = $('#warning-userName');
signupData.$warningLabels.nickname = $('#warning-userNickname');
signupData.$warningLabels.email = $('#warning-userEmail');
signupData.$warningLabels.birth = $('#warning-userBirth');

// $(function () {
function OnSignup() {
  $('.warning-text').empty();

  // 아이디 체크
  signupData.userData.id = signupData.$inputs.id.val();
  let check = true;
  if (signupData.userData.id.length == 0) {
    signupData.$warningLabels.id.text(
      '필수항목 (4~20자 / 소문자부터 시작 / 숫자, 소문자 영문만 입력 가능)'
    );
    check = false;
  } else if (!ValidateId(signupData.userData.id)) {
    signupData.$warningLabels.id.text(
      '4~20자 / 소문자부터 시작 / 숫자, 소문자 영문만 입력 가능'
    );
    check = false;
  }
  // 비번 체크
  signupData.userData.password = signupData.$inputs.password.val();
  if (signupData.userData.password.length == 0) {
    signupData.$warningLabels.password.text(
      '필수항목 (6~20자 / 영어 및 숫자 포함)'
    );
    check = false;
  } else if (!ValidatePassword(signupData.userData.password)) {
    signupData.$warningLabels.password.text(
      '6~20자의 영어 및 숫자 포함하여 입력하세요!'
    );
    check = false;
  }
  // 비번 재확인 체크
  signupData.userData.passwordRe = signupData.$inputs.passwordRe.val();
  if (signupData.userData.passwordRe.length == 0) {
    signupData.$warningLabels.passwordRe.text(
      '필수항목 (비밀번호와 똑같이 입력해주세요!)'
    );
    check = false;
  } else if (
    !ValidatePasswordConfirm(
      signupData.userData.password,
      signupData.userData.passwordRe
    )
  ) {
    signupData.$warningLabels.passwordRe.text(
      '비밀번호와 입력한 값이 같지 않습니다!'
    );
    check = false;
  }
  // 이름 체크
  signupData.userData.name = signupData.$inputs.name.val();
  if (signupData.userData.name == 0) {
    signupData.$warningLabels.name.text('필수항목 (2~20자의 한글만 입력 가능)');
    check = false;
  } else if (!ValidateName(signupData.userData.name)) {
    signupData.$warningLabels.name.text('2~20자의 한글만 입력해주세요!');
    check = false;
  }
  // 이메일 체크
  signupData.userData.email = signupData.$inputs.email.val();
  if (signupData.userData.email == 0) {
    signupData.$warningLabels.email.text('필수항목 (이메일 형식에 맞게 입력!)');
    check = false;
  } else if (!ValidateEmail(signupData.userData.email)) {
    signupData.$warningLabels.email.text('이메일 형식에 맞게 입력해주세요!');
    check = false;
  }
  // 닉네임 체크
  signupData.userData.nickname = signupData.$inputs.nickname.val();
  if (
    signupData.userData.nickname.length != 0 &&
    !ValidateNickname(signupData.userData.nickname)
  ) {
    signupData.$warningLabels.nickname.text('3~10자 영문,한글,숫자 입력 가능');
  }
  // 생년월일 체크
  signupData.userData.birth = signupData.$inputs.birth.val();
  if (
    signupData.userData.birth.length != 0 &&
    !ValidateBirth(signupData.userData.birth)
  ) {
    signupData.$warningLabels.birth.text('생년월일을 제대로 선택해주세요.');
  }

  // 데이터 전송
  if (check == true) Submit();
}

function ValidateId(id) {
  // 4~20자 소문자부터 시작 / 숫자, 소문자 영문만 입력 가능
  const regExp = /^[a-z]+[a-z0-9]{3,19}/;
  return regExp.test(id);
}
function ValidatePassword(password) {
  // 6~20자 영어, 숫자 중 하나 이상 모두 포함
  const regExp = /^(?=.{6,20})(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).*$/;
  return regExp.test(password);
}
function ValidatePasswordConfirm(password, passwordRe) {
  return password == passwordRe;
}
function ValidateName(name) {
  // 2~20자 완성형 한글만
  const regExp = /^[가-힣]+[가-힣]{1,19}$/;
  return regExp.test(name);
}
function ValidateEmail(email) {
  // 이메일 형식에 맞게
  const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
}
function ValidateNickname(nickname) {
  // 2~10자 영문,한글,숫자 입력 가능
  const regExp = /^[a-zA-Z0-9가-힣]{2,10}$/;
  return regExp.test(nickname);
}
function ValidateBirth(birth) {
  console.log(birth);
  // YYYY-MM-DD 형식
  const regExp = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return regExp.test(birth);
}

// 서버 전송
function Submit() {}

// ------------- 초기화 ------------- //
(function Init() {
  InitDatePicker();
  FocusInput();
})();
