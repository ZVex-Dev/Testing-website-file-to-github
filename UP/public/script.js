function loadVideo(name) {
    document.getElementById('videoPlayer').src = `/api/video?name=${name}`;
}