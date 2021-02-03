// ------------ 공통 ----------- //
const beforeSlectors = {
  sideMenuListOn: null,
  faqListBtn: null,
  faqListOn: null,
};
const onClassNames = {
  sideMenuListOn: 'sideMenu-list__on',
  faqListOn: 'faq__on',
};

// ------------ 패치 관련 ------------- //
let beforeHTML = null;

// 패치를 통해 HTML내용을 바꿔준다
function ServiceCenterFetch(dirAndFileName, selectorName, callback) {
  fetch(dirAndFileName).then(function (response) {
    response.text().then(function (text) {
      let selector = document.querySelector(selectorName);
      if (beforeHTML != null) {
        selector.innerHTML = beforeHTML;
      }
      beforeHTML = selector.innerHTML;
      selector.innerHTML += text;
      if (callback != null) callback();
    });
  });
}
function AddClass(selectorName, appendClassName) {
  let selector = document.querySelector(selectorName);
  selector.classList.add(appendClassName);
  return selector;
}
// 사이드 메뉴 중복 class제거 및 선택한 리스트에 클래스 추가
function OnSideMenuList(selectorName) {
  if (beforeSlectors.sideMenuListOn != null)
    beforeSlectors.sideMenuListOn.classList.remove(onClassNames.sideMenuListOn);

  beforeSlectors.sideMenuListOn = AddClass(
    selectorName,
    onClassNames.sideMenuListOn
  );
}

// 고객센터 홈 HTML 패치
function ServiceCenterFetchByMain() {
  ServiceCenterFetch('../html/serviceCenter/main.html', '.contents', init_faq);
  OnSideMenuList('#service-home');
}
// 자주 묻는 질문 HTML 패치
function ServiceCenterFetchByFaQ() {
  ServiceCenterFetch('../html/serviceCenter/faq.html', '.contents', init_faq);
  OnSideMenuList('#service-faq');
  testFAQ();
}

// 초기화 즉시 실행 함수
ServiceCenterFetchByMain(init_faq);

// ------------ FAQ 관련 ------------- //
function init_faq() {
  $('.faq-list-btn').click(FAQListOnClick);
}
// FAQ 리스트 클릭시 클래스 추가 및 제거
function FAQListOnClick() {
  if (beforeSlectors.faqListOn != null) {
    beforeSlectors.faqListOn.removeClass(onClassNames.faqListOn);
    beforeSlectors.faqListOn = null;

    if (beforeSlectors.faqListBtn == this) return;
  }
  beforeSlectors.faqListBtn = this;
  const parent = $(this).stop().parent();
  parent.addClass(onClassNames.faqListOn);
  beforeSlectors.faqListOn = parent;
}

// FAQ 페이징
function testFAQ() {
  $.ajax({
    url: '../script/faq.json',
    async: true,
    type: 'GET',
    dataType: 'JSON',
    success: function (req) {
      console.log('req');
    },
  }).done(function () {
    console.log('erwer');
  });
}
