/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /gh/sh20raj/AudiPlay@master/audiplay.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const ap_html=
'<style>.ap_container{transition-duration:.5s;display:inline-block;text-align:center;overflow:hidden;padding:5px;background:rgba(245,236,242);border-radius:4px;transition:all 1s}.ap_controls{width:100%;display:flex;position:relative;flex-direction:row;font-size:large;font-family:Tahoma,Geneva,Verdana,sans-serif;cursor:pointer}.ap_controls span{margin:5px;display:inline-block}.ap_container .playpausebtn{border-radius:50%;font-size:larger}.ap_container svg{width:25px;height:25px}.ap_controls .duration{width:80%;margin-right:10px;bottom:4px}.ap_controls input[type=range]{-webkit-appearance:none;width:100%;outline:0;height:2px;margin:0 15px;background:#0ff}.ap_controls:hover input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;cursor:pointer;background:#00ced1}.ap_controls input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:0}.ap_sound{padding:4px}.ap_time{margin:4px}</style><div class="ap_container"> <div class="ap_controls"> <span class="playpausebtn" onclick="justplay()"> </span><span class="ap_loop" onclick="ap_loopf()"></span> <span class="duration"> <input type="range" min="0" max="100" value="0" class="duration_slider" onchange="change_duration()"> </span> <span class="ap_time"></span> <span class="ap_download" onclick="ap_download()"></span> <span class="ap_sound" onclick="ap_mute()"> </span> </div> </div>';
let ap_audio=o(".audiplay");createcontainer();let play=o(".playpausebtn"),ap_loop=o(".ap_loop"),slider=document.querySelector(".duration_slider"),track=o(".audiplay"),showtimer=o(".ap_time"),ap_time=ap_audio.currentTime,
Playing_song=!1,playing_time="  "+secondsToMinutes(ap_audio.duration),
autoplay=!1,loop=!1;
function createcontainer(){ap_audio.insertAdjacentHTML("Beforebegin",ap_html)}function showtime(){showtimer.innerHTML="  -"+secondsToMinutes(ap_audio.duration-ap_audio.currentTime)}function justplay(){0==Playing_song?playsong():pausesong()}function secondsToMinutes(s){return Math.floor(s/60)+":"+Math.floor(s%60)}function change_duration(){slider_position=track.duration*(slider.value/100),
track.currentTime=slider_position,showtime()}function ap_download(){window.open(track.currentSrc)}function o(s){return document.querySelector(s)}function range_slider(){let s=0;
showtime(),isNaN(track.duration)||(s=track.currentTime*(100/track.duration),slider.value=s),track.ended&&(play.innerHTML=ap_playsvg,1==autoplay&&(index_no+=1,playsong()))}function ap_mute(){ap_audio.muted?(ap_audio.muted=0,
o(".ap_sound").innerHTML=ap_volumnsvg):(ap_audio.muted=1,
o(".ap_sound").innerHTML=ap_mutesvg)}function ap_loopf(){ap_audio.loop?(ap_audio.loop=!1,
o(".ap_loop").innerHTML=ap_loopsvg):(ap_audio.loop=!0,
o(".ap_loop").innerHTML=ap_loopedsvg)}ap_audio.style.display="none",""!=ap_audio.style.width&&(o(".ap_container").style.width=ap_audio.style.width),setTimeout((function(){o(".ap_time").innerHTML="  "+secondsToMinutes(ap_audio.duration)}),1e3),
setTimeout((function(){o(".ap_time").innerHTML="  "+secondsToMinutes(ap_audio.duration)}),2e3),null!=track.getAttribute("nodownload")&&(o(".ap_download").style.display="none");
const ap_playsvg='??????'
,ap_pausesvg='??????'
,ap_loopsvg='????'
,ap_loopedsvg='????'
,ap_downloadsvg='??????'
,ap_volumnsvg='????'
,ap_mutesvg='????';
function playsong(){setInterval((function(){range_slider()}),700),track.play(),Playing_song=!0,play.innerHTML=ap_pausesvg}function pausesong(){track.pause(),Playing_song=!1,play.innerHTML=ap_playsvg}ap_loop.innerHTML=ap_loopsvg,o(".ap_download").innerHTML=ap_downloadsvg,play.innerHTML=ap_playsvg,o(".ap_sound").innerHTML=ap_volumnsvg;
//# sourceMappingURL=/sm/685e94d641d0ef53532a444a49e38d645a242aa9269e32e8621735ebf6b9e71d.map
