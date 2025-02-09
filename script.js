const weatherAPIKey = '87a7d565ef5d4a0cbf743832250902';
const city = 'Yogyakarta';

fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}`)
    .then (response => response.json())
    .then (data => {
        console.log(data);

        const currentWeather = data.current.condition.text;
        const temperature = data.current.temp_c;
        const time = data.location.localtime;

        const body = document.body;
        const title = document.querySelector('.home h1');
        const button = document.querySelector('.home a');
        const aboutMe = document.querySelector('.about h2');
        const about = document.querySelector('.aboutMe');
        const contacts = document.querySelectorAll('.contact a');

        if (currentWeather.includes('rain')) {
            body.style.backgroundImage = 'linear-gradient(to right, #647d96, #3e5064';
            title.style.color = 'rgb(26, 47, 71)';
            button.style.color = 'rgb(154, 170, 187)';
            button.style.backgroundColor = 'rgb(26, 47, 71)';
            aboutMe.style.color = 'rgb(26, 47, 71)';
            about.style.backgroundColor ='rgb(151, 164, 179)';
            contacts.forEach(contact => {
                contact.style.color = 'rgb(26, 47, 71)';
            })
        } else if (currentWeather.includes('cloud')) {
            body.style.backgroundImage = 'linear-gradient(to right, #b0bec5, #78909c';
            title.style.color = '#3e5064';
            button.style.color = 'white';
            button.style.backgroundColor = '#3e5064';
            aboutMe.style.color = '#3e5064';
            about.style.backgroundColor ='rgb(204, 211, 219)';
            contacts.forEach(contact => {
                contact.style.color = '#3e5064';
            })
        } else if (currentWeather.includes('cloud')|| currentWeather.includes('clear')) {
            body.style.backgroundImage = 'linear-gradient(to right, #fef6ee, #f1e1c6';
        }
    })
    .catch (error => {
        console.error('Error fetching weather', error)
    })

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
