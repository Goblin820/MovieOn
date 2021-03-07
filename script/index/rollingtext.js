var pausecontent2 = new Array();
pausecontent2[0] =
  '극장판 귀멸의 칼날: <a href="#none">08:00</a> <a href="#none">10:00</a> <a href="#none">12:00</a> <a href="#none">14:00</a> <a href="#none">16:00</a>  ';

pausecontent2[1] =
  '소울: <a href="#none">08:30</a> <a href="#none">10:30</a> <a href="#none">12:30</a> <a href="#none">14:30</a> <a href="#none">16:30</a> ';
pausecontent2[2] =
  '호라이즌 나인: <a href="#none">08:45</a> <a href="#none">10:45</a> <a href="#none">12:45</a> <a href="#none">14:45</a> <a href="#none">16:45</a> ';
pausecontent2[3] =
  '서바이브 더 나잇: <a href="#none">08:55</a> <a href="#none">10:55</a> <a href="#none">12:55</a> <a href="#none">14:55</a> <a href="#none">16:55</a> ';
pausecontent2[4] =
  '극장판 바이올렛 에버가든: <a href="#none">09:00</a> <a href="#none">11:00</a> <a href="#none">13:00</a> <a href="#none">15:00</a> <a href="#none">17:00</a> ';
pausecontent2[5] =
  '명탐정 코난: 진홍의 수학여행: <a href="#none">09:15</a> <a href="#none">11:15</a> <a href="#none">13:15</a> <a href="#none">15:15</a> <a href="#none">17:15</a> ';
pausecontent2[6] =
  '사일런싱: <a href="#none">09:30</a> <a href="#none">11:30</a> <a href="#none">13:30</a> <a href="#none">15:30</a> <a href="#none">17:30</a> ';
pausecontent2[7] =
  '더 시크릿: <a href="#none">09:40</a> <a href="#none">11:40</a> <a href="#none">13:40</a> <a href="#none">15:40</a> <a href="#none">17:40</a> ';

/***********************************************
 * Pausing up-down scroller- ⓒ Dynamic Drive (www.dynamicdrive.com)
 * This notice MUST stay intact for legal use
 * Visit http://www.dynamicdrive.com/ for this script and 100s more.
 ***********************************************/

function pausescroller(content, divId, divClass, delay) {
  this.content = content; //message array content
  this.tickerid = divId; //ID of ticker div to display information
  this.delay = delay; //Delay between msg change, in miliseconds.
  this.mouseoverBol = 0; //Boolean to indicate whether mouse is currently over scroller (and pause it if it is)
  this.hiddendivpointer = 1; //index of message array for hidden div
  document.write(
    '<div id="' +
      divId +
      '" class="' +
      divClass +
      '" style="position: relative; overflow: hidden"><div class="innerDiv" style="position: absolute; width: 100%" id="' +
      divId +
      '1">' +
      content[0] +
      '</div><div class="innerDiv" style="position: absolute; width: 100%; visibility: hidden" id="' +
      divId +
      '2">' +
      content[1] +
      '</div></div>'
  );
  var scrollerinstance = this;
  if (window.addEventListener)
    //run onload in DOM2 browsers
    window.addEventListener(
      'load',
      function () {
        scrollerinstance.initialize();
      },
      false
    );
  else if (window.attachEvent)
    //run onload in IE5.5+
    window.attachEvent('onload', function () {
      scrollerinstance.initialize();
    });
  else if (document.getElementById)
    //if legacy DOM browsers, just start scroller after 0.5 sec
    setTimeout(function () {
      scrollerinstance.initialize();
    }, 500);
}

// -------------------------------------------------------------------
// initialize()- Initialize scroller method.
// -Get div objects, set initial positions, start up down animation
// -------------------------------------------------------------------

pausescroller.prototype.initialize = function () {
  this.tickerdiv = document.getElementById(this.tickerid);
  this.visiblediv = document.getElementById(this.tickerid + '1');
  this.hiddendiv = document.getElementById(this.tickerid + '2');
  this.visibledivtop = parseInt(pausescroller.getCSSpadding(this.tickerdiv));
  //set width of inner DIVs to outer DIV's width minus padding (padding assumed to be top padding x 2)
  this.visiblediv.style.width = this.hiddendiv.style.width =
    this.tickerdiv.offsetWidth - this.visibledivtop * 2 + 'px';
  this.getinline(this.visiblediv, this.hiddendiv);
  this.hiddendiv.style.visibility = 'visible';
  var scrollerinstance = this;
  document.getElementById(this.tickerid).onmouseover = function () {
    scrollerinstance.mouseoverBol = 1;
  };
  document.getElementById(this.tickerid).onmouseout = function () {
    scrollerinstance.mouseoverBol = 0;
  };
  if (window.attachEvent)
    //Clean up loose references in IE
    window.attachEvent('onunload', function () {
      scrollerinstance.tickerdiv.onmouseover = scrollerinstance.tickerdiv.onmouseout = null;
    });
  setTimeout(function () {
    scrollerinstance.animateup();
  }, this.delay);
};

// -------------------------------------------------------------------
// animateup()- Move the two inner divs of the scroller up and in sync
// -------------------------------------------------------------------

pausescroller.prototype.animateup = function () {
  var scrollerinstance = this;
  if (parseInt(this.hiddendiv.style.top) > this.visibledivtop + 5) {
    this.visiblediv.style.top = parseInt(this.visiblediv.style.top) - 5 + 'px';
    this.hiddendiv.style.top = parseInt(this.hiddendiv.style.top) - 5 + 'px';
    setTimeout(function () {
      scrollerinstance.animateup();
    }, 50);
  } else {
    this.getinline(this.hiddendiv, this.visiblediv);
    this.swapdivs();
    setTimeout(function () {
      scrollerinstance.setmessage();
    }, this.delay);
  }
};

// -------------------------------------------------------------------
// swapdivs()- Swap between which is the visible and which is the hidden div
// -------------------------------------------------------------------

pausescroller.prototype.swapdivs = function () {
  var tempcontainer = this.visiblediv;
  this.visiblediv = this.hiddendiv;
  this.hiddendiv = tempcontainer;
};

pausescroller.prototype.getinline = function (div1, div2) {
  div1.style.top = this.visibledivtop + 'px';
  div2.style.top =
    Math.max(div1.parentNode.offsetHeight, div1.offsetHeight) + 'px';
};

// -------------------------------------------------------------------
// setmessage()- Populate the hidden div with the next message before it's visible
// -------------------------------------------------------------------

pausescroller.prototype.setmessage = function () {
  var scrollerinstance = this;
  if (this.mouseoverBol == 1)
    //if mouse is currently over scoller, do nothing (pause it)
    setTimeout(function () {
      scrollerinstance.setmessage();
    }, 100);
  else {
    var i = this.hiddendivpointer;
    var ceiling = this.content.length;
    this.hiddendivpointer = i + 1 > ceiling - 1 ? 0 : i + 1;
    this.hiddendiv.innerHTML = this.content[this.hiddendivpointer];
    this.animateup();
  }
};

pausescroller.getCSSpadding = function (tickerobj) {
  //get CSS padding value, if any
  if (tickerobj.currentStyle) return tickerobj.currentStyle['paddingTop'];
  else if (window.getComputedStyle)
    //if DOM2
    return window
      .getComputedStyle(tickerobj, '')
      .getPropertyValue('padding-top');
  else return 0;
};
