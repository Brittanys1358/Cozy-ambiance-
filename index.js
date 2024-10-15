// Initialize variables
var player;
var isPlaying = false;

// Load the YouTube API
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0', // Hide player visuals
    width: '0',
    videoId: 'rrfsfWrxfiA', // Correct YouTube video ID
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Function to toggle play/pause
function playPause() {
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

// Function to restart the video
function restart() {
  player.seekTo(0);
  player.playVideo();
}

// Update button icon based on video state
function onPlayerStateChange(event) {
  var playPauseButton = document.getElementById('play-pause');
  if (event.data == YT.PlayerState.PLAYING) {
    playPauseButton.innerHTML = 'II'; // Pause icon
    isPlaying = true;
  } else {
    playPauseButton.innerHTML = '▹'; // Play icon
    isPlaying = false;
  }
}
