src = '//www.youtube.com/player_api';
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '700',
    width: '1100',
    playerVars: {
      listType: 'playlist',
      list: 'PLVLQsJOcjnYjREfq5Qh1NcEs-RJw7jfpQ',
      loop: 1,
    },
    rel: '0',
  });
}

var videos = document.getElementsByTagName('iframe'),
  fraction = 0.8;
function checkScroll() {
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];

    var x = 0,
      y = 0,
      w = video.width,
      h = video.height,
      r, //right
      b, //bottom
      visibleX,
      visibleY,
      visible,
      parent;

    parent = video;
    while (parent && parent !== document.body) {
      x += parent.offsetLeft;
      y += parent.offsetTop;
      parent = parent.offsetParent;
    }

    r = x + parseInt(w);
    b = y + parseInt(h);

    visibleX = Math.max(
      0,
      Math.min(
        w,
        window.pageXOffset + window.innerWidth - x,
        r - window.pageXOffset
      )
    );
    visibleY = Math.max(
      0,
      Math.min(
        h,
        window.pageYOffset + window.innerHeight - y,
        b - window.pageYOffset
      )
    );
    visible = (visibleX * visibleY) / (w * h);

    if (visible > fraction) {
      player.playVideo();
    } else if (visible < fraction) {
      player.pauseVideo();
    }
  }
}


window.addEventListener('scroll', checkScroll, false);

window.addEventListener('load', checkScroll, false);
