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
  CreateKakaomap();
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

// ------ 카카오 맵 관련 ------- //
let container = null;
let options = null;
let map = null;
function CreateKakaomap() {
  if (options != null) return;

  container = document.getElementById('kakao-map'); //지도를 담을 영역의 DOM 레퍼런스

  let position = new kakao.maps.LatLng(37.53915264981527, 127.12296544442889);
  options = {
    center: position, //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  // 마커가 표시될 위치입니다
  // 37.54030557474747, 127.1232347846574
  // new kakao.maps.LatLng(33.450701, 126.570667)

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map,
    position: position,
  });

  var infowindow = new kakao.maps.InfoWindow({
    content: '<div>무비온 본사</div>', // 인포윈도우에 표시할 내용
  });

  // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
  // 이벤트 리스너로는 클로저를 만들어 등록합니다
  // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
  kakao.maps.event.addListener(
    marker,
    'mouseover',
    makeOverListener(map, marker, infowindow)
  );
  kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}
// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}
