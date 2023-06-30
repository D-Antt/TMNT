var url = 'https://comicvine.gamespot.com/api/characters/?api_key=7d299aec6bf7c1968a01ca2db4367842401b5789&filter=universe:tmnt&format=json';

fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // Store all characters in an array
    var characters = data.results;

    // Function to get a random character
    function getRandomCharacter() {
        var randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    }

    // Get two random characters
    var character1 = getRandomCharacter();
    var character2 = getRandomCharacter();

    // Update the character images and information on your webpage
    // ...
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});
