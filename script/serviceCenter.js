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
  ServiceCenterFetch(
    '../html/serviceCenter/main.html',
    '.contents',
    initFAQClickEvent
  );
  OnSideMenuList('#service-home');
}
// 자주 묻는 질문 HTML 패치
function ServiceCenterFetchByFaQ() {
  ServiceCenterFetch(
    '../html/serviceCenter/faq.html',
    '.contents',
    initFAQList
  );
  OnSideMenuList('#service-faq');
}

// 초기화 즉시 실행 함수
ServiceCenterFetchByMain();

// ------------ FAQ 관련 ------------- //
function initFAQClickEvent() {
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
let endPage = 0;
let ddd = 1;
const selectClassName = 'paging-selecting';
function initFAQList() {
  $.ajax({
    url: '../script/faq.json',
    async: true,
    type: 'get',
    dataType: 'json',
    success: function (req) {
      let endPage = 0;

      let list = req.list;
      if (list == null) return;

      let maxCount = 0;
      for (let i = 0; i < list.length; ++i) {
        maxCount += list[i].length;
        endPage++;
      }
      document.querySelector(
        '.faq-list-count'
      ).textContent = `전체 : ${maxCount}건`;

      const selectList = list[0];
      const faqList = document.querySelector('.faq-list');

      for (let i = 0; i < selectList.length; i++) {
        faqList.innerHTML += `<li class="faq-list-content">
        <a class="faq-list-btn" href="#none">
          <span class="faq-spriteImg faq-icon-question">Q.</span>
          <sapn class="faq-title"
            >${selectList[i].title}</sapn
          >
          <span class="faq-spriteImg faq-icon-arrow">arrow</span>
        </a>
        <nav class="faq-nav">
          <p>
          ${selectList[i].content}
          </p>
        </nav>
      </li>`;
      }
      const $faqPaging = $('.faq-paging');
      $faqPaging.empty();

      $faqPaging[0].innerHTML += `<a class="${selectClassName}" href="javascript:search(${1})">${1}</a>`;

      for (let i = 2; i < endPage + 1; i++) {
        $faqPaging[0].innerHTML += `<a href="javascript:search(${i})">${i}</a>`;
      }
    },
  }).done(function () {
    initFAQClickEvent();
  });
}

function search(page) {
  if (page < 1) return;

  $.ajax({
    url: '../script/faq.json',
    async: true,
    type: 'get',
    dataType: 'json',
    success: function (req) {
      let list = req.list;
      if (list == null) return;
      const index = page - 1;

      const selectList = list[index];
      const $faqList = $('.faq-list');
      $faqList.empty();

      for (let i = 0; i < selectList.length; i++) {
        $faqList[0].innerHTML += `<li class="faq-list-content">
        <a class="faq-list-btn" href="#none">
          <span class="faq-spriteImg faq-icon-question">Q.</span>
          <sapn class="faq-title"
            >${selectList[i].title}</sapn
          >
          <span class="faq-spriteImg faq-icon-arrow">arrow</span>
        </a>
        <nav class="faq-nav">
          <p>
          ${selectList[i].content}
          </p>
        </nav>
      </li>`;
      }
      const $faqPaging = $('.faq-paging')[0];

      const childrens = $faqPaging.children;
      for (let i = 0; i < childrens.length; i++) {
        childrens[i].classList.remove(selectClassName);
      }
      $faqPaging.children[index].classList.add(selectClassName);
    },
  }).done(function () {
    initFAQClickEvent();
  });
}
