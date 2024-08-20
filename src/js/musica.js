const playPauseBtn = document.getElementById('playPauseBtn');

// Array de URLs das músicas
const musicArray = [

    "/src/media/2.mp3",
    "/src/media/1.mp3",
    "/src/media/3.mp3"
];

// Alterna entre play e pause
playPauseIcon.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.src = "iconeparasom.gif"; // Ícone de som
    } else {
        audioPlayer.pause();
        playPauseIcon.src = "iconeparaplay.gif"; // Ícone de play
    }
});

audioPlayer.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % musicArray.length;
    audioPlayer.src = musicArray[currentTrack];
    audioPlayer.play();
});
