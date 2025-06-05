// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Download page loaded successfully!");

    // You can add JavaScript interactions here if needed.
    // For example, tracking downloads with an analytics service,
    // or dynamically fetching download links.

    const downloadButtons = document.querySelectorAll('.download-button');

    downloadButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // If you need to perform an action before download (e.g., show a message or log)
            // you can do it here.
            // For now, the default <a> tag behavior will handle the download.
            console.log(`Download initiated for: ${button.href}`);

            // Example: Temporarily change button text (could be more complex with spinners)
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Downloading...';
            button.disabled = true; // Visually disable, though <a> tag doesn't have disabled property

            // Simulate download time and revert
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 3000); // Revert after 3 seconds

            // Note: If your files are large or server is slow, this is just a UI cue.
            // The actual download is handled by the browser via the href.
            // If the download starts immediately, this visual cue might be very short.
        });
    });
});