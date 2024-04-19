document.addEventListener("DOMContentLoaded", function() {
    const videosContainer = document.getElementById("videos");

    const videoData = [
        { 
            title: "Hot melon takes of clothes",
            description: "Watch this melon go wild!",
            preview: "img/thumb/hotmelonpeels.jpg",
            videoSource: "vids/hotmelonpeels.mp4"
        },        
        { 
            title: "Hot melon !",
            description: "Massaging melon till she gets wet",
            preview: "img/thumb/melon2.jpg",
            videoSource: "vids/melon2.mp4"
        },
    ];

    videoData.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("video");

        const videoContent = document.createElement("div");
        videoContent.classList.add("video-content");
        videoContent.textContent = video.description;

        const videoTitle = document.createElement("div");
        videoTitle.classList.add("video-title");
        videoTitle.textContent = video.title;

        const videoDescription = document.createElement("div");
        videoDescription.classList.add("video-description");
        videoDescription.textContent = video.description;

        const videoPreview = document.createElement("img");
        videoPreview.src = video.preview;
        videoPreview.alt = video.title;

        const videoPlayButton = document.createElement("div");
        videoPlayButton.classList.add("video-play-button");
        videoPlayButton.innerHTML = '<img src="img/sources/play-button.png" alt="Play">';

        videoPlayButton.addEventListener("click", function() {
            const videoPlayer = document.createElement("video");
            videoPlayer.src = video.videoSource;
            videoPlayer.controls = true;
            videoPlayer.autoplay = true;
            videoPlayer.style.width = "100%";
            videoPlayer.style.height = "100%";
            videoPlayer.style.objectFit = "contain";
            videoPlayer.style.position = "fixed";
            videoPlayer.style.top = "0";
            videoPlayer.style.left = "0";
            videoPlayer.style.zIndex = "9999";
            videoPlayer.style.backgroundColor = "#000";
            document.body.appendChild(videoPlayer);

            // Exit event listener
            videoPlayer.addEventListener("fullscreenchange", function() {
                if (!document.fullscreenElement) {
                    document.body.removeChild(videoPlayer);
                }
            });

            videoPlayer.requestFullscreen();
        });

        videoElement.appendChild(videoPreview);
        videoElement.appendChild(videoPlayButton);
        videoElement.appendChild(videoTitle);
        videoElement.appendChild(videoContent);

        videosContainer.appendChild(videoElement);
    });
});
