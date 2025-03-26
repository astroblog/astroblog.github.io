function viewImageFullscreen(imageSrc) {
    // Create fullscreen container
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.cursor = 'pointer';
    container.onclick = () => {
        document.body.removeChild(container);
    };

    // Create image element
    const image = document.createElement('img');
    image.src = imageSrc;
    image.style.width = '100%';  // Ensure it scales to full width
    image.style.height = '100%'; // Ensure it scales to full height
    image.style.objectFit = 'contain'; // Keeps image within the viewport and scales it

    // Add exit message
    const exitMessage = document.createElement('div');
    exitMessage.textContent = 'Click or press ESC to exit fullscreen';
    exitMessage.style.position = 'absolute';
    exitMessage.style.bottom = '20px';
    exitMessage.style.left = '50%';
    exitMessage.style.transform = 'translateX(-50%)';
    exitMessage.style.color = 'white';
    exitMessage.style.fontSize = '16px';
    exitMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    exitMessage.style.padding = '10px 20px';
    exitMessage.style.borderRadius = '5px';
    exitMessage.style.pointerEvents = 'none';
    container.appendChild(exitMessage);

    // Append the image to the container
    container.appendChild(image);

    // Add the container to the body
    document.body.appendChild(container);

    // Request fullscreen
    if (container.requestFullscreen) {
        container.requestFullscreen();
    } else if (container.mozRequestFullScreen) { // Firefox
        container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) { // Chrome, Safari, Opera
        container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) { // IE/Edge
        container.msRequestFullscreen();
    }

    // Listen for fullscreen change to restore the page
    document.addEventListener('fullscreenchange', exitFullscreenHandler);
    document.addEventListener('webkitfullscreenchange', exitFullscreenHandler); // Safari
    document.addEventListener('mozfullscreenchange', exitFullscreenHandler); // Firefox
    document.addEventListener('MSFullscreenChange', exitFullscreenHandler); // IE/Edge

    // Handler to restore state when exiting fullscreen
    function exitFullscreenHandler() {
        const container = document.querySelector("div[style*='position: fixed']");
        
        if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
            if (container && container.parentNode === document.body) {
                document.body.removeChild(container);
                console.log("Container removed successfully.");
            }
    
            // Remove event listeners to prevent memory leaks
            document.removeEventListener('fullscreenchange', exitFullscreenHandler);
            document.removeEventListener('webkitfullscreenchange', exitFullscreenHandler);
            document.removeEventListener('mozfullscreenchange', exitFullscreenHandler);
            document.removeEventListener('MSFullscreenChange', exitFullscreenHandler);
        }
    }
     
}
