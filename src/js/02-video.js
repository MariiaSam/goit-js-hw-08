import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//3
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// 4 
const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay, 1000));

player.off('play', onPlay);

// Alternatively, `off` can be called with just the event name to remove all
// listeners.
player.off('play');