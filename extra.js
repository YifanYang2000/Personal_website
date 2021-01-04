/* ----- Progression ----- */
window.onscroll = function() {progression()};

function progression() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}


/* ----- Typed ----- */
var typed = new Typed('.animate', {
    strings: [
        "DEVELOPER.^2000",
        "CREATOR.^2000",
        "ARTIST.^2000",
        "PIONEER.^2000"
    ],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true
});

/* ----- Audio ----- */
var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {

    // Update the Button
    var pause = ctrl.innerHTML === 'MUTE';
    ctrl.innerHTML = pause ? 'PLAY.' : 'MUTE';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    // Prevent Default Action
    return false;
};


