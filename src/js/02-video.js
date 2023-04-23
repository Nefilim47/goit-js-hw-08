import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector("#vimeo-player")
const player = new Player(videoEl);

if (localStorage.getItem("videoplayer-current-time")) {  
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}; 

player.on("timeupdate", throttle(onPlay, 1000));
