import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//3
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// 4
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

//6
player.on('timeupdate', throttle(onPlay, 1000));

//5
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
