document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');

    const apiUrl = `https://itunes.apple.com/search?term=shining+bright+csr&limit=1`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const song = data.results[0]?.previewUrl;
            if (song) {
                audioPlayer.src = song;
                audioPlayer.hidden = false;
            } else {
                audioPlayer.hidden = true;
            }
        })
        .catch (error => {
            console.error('Error fetching song', error);
            audioPlayer.hidden = true;
        });
});