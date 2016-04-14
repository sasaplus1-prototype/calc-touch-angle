(function(){

  'use strict';

  var touchArea = document.getElementById('js-touch-area');

  var leftTopArea = document.getElementById('js-left-top-area'),
      rightTopArea = document.getElementById('js-right-top-area'),
      leftBottomArea = document.getElementById('js-left-bottom-area'),
      rightBottomArea = document.getElementById('js-right-bottom-area');

  touchArea.addEventListener('touchmove', function(event) {
    var x, y, theta, angle;

    event.preventDefault();

    x = event.changedTouches[0].pageX;
    y = event.changedTouches[0].pageY;

    theta = Math.atan2(x - 200 - 8, y - 200 - 8);
    angle = theta / (Math.PI / 180);

    console.log('angle: %s', angle);

    leftTopArea.classList.remove('active');
    rightTopArea.classList.remove('active');
    leftBottomArea.classList.remove('active');
    rightBottomArea.classList.remove('active');

    if (angle <= 180 && angle >= 90) {
      // 180..90 green
      rightTopArea.classList.add('active');
    } else if (angle <= 90 && angle >= 0) {
      // 90..0 yellow
      rightBottomArea.classList.add('active');
    } else if (angle <= 0 && angle >= -90) {
      // -0..-90 blue
      leftBottomArea.classList.add('active');
    } else {
      // -90..-180 red
      leftTopArea.classList.add('active');
    }
  }, false);

  touchArea.addEventListener('touchend', function(event) {
    leftTopArea.classList.remove('active');
    rightTopArea.classList.remove('active');
    leftBottomArea.classList.remove('active');
    rightBottomArea.classList.remove('active');
  }, false);

}());
