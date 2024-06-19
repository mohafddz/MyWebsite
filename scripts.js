document.addEventListener('DOMContentLoaded', function() {
    const rickrollVideo = document.getElementById('rickroll-video');
    const backgroundVideo = document.getElementById('background-video');

    // Mute the video initially
    rickrollVideo.muted = true;

    // After 5 seconds, unmute the video
    setTimeout(function() {
        rickrollVideo.muted = false;
        
    }, 100); // Adjust the time in milliseconds as needed

    setTimeout(function(){
        rickrollVideo.play();
    },100)

    // Sync the background video with the main video
    rickrollVideo.addEventListener('play', () => {
        backgroundVideo.currentTime = rickrollVideo.currentTime;
        backgroundVideo.play();
    });

    rickrollVideo.addEventListener('pause', () => {
        backgroundVideo.pause();
    });

    rickrollVideo.addEventListener('seeking', () => {
        backgroundVideo.currentTime = rickrollVideo.currentTime;
    });

    rickrollVideo.addEventListener('timeupdate', () => {
        if (Math.abs(backgroundVideo.currentTime - rickrollVideo.currentTime) > 0.5) {
            backgroundVideo.currentTime = rickrollVideo.currentTime;
        }
    });
});
