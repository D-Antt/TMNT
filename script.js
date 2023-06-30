var url = 'https://comicvine.gamespot.com/api/characters/?api_key=7d299aec6bf7c1968a01ca2db4367842401b5789&format=json';
var characters;

fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // Store all characters in an array
    characters = data.results;

    // Update the character images and names on your webpage with initial characters
    var character1 = getRandomCharacter();
    var character2 = getRandomCharacter();
    document.getElementById('left-character-image').src = character1.image; // Replace 'image' with the actual property name for the image URL
    document.getElementById('right-character-image').src = character2.image; // Replace 'image' with the actual property name for the image URL
    document.getElementById('left-character-name').textContent = character1.name; // Replace 'name' with the actual property name for the name
    document.getElementById('right-character-name').textContent = character2.name; // Replace 'name' with the actual property name for the name
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});

// Function to get a random character
function getRandomCharacter() {
    var randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

// Event listeners for the vote buttons
document.getElementById('left-vote-button').addEventListener('click', function() {
    var character = getRandomCharacter();
    // Update the left character image and name on your webpage
    document.getElementById('left-character-image').src = character.image; // Replace 'image' with the actual property name for the image URL
    document.getElementById('left-character-name').textContent = character.name; // Replace 'name' with the actual property name for the name
});

document.getElementById('right-vote-button').addEventListener('click', function() {
    var character = getRandomCharacter();
    // Update the right character image and name on your webpage
    document.getElementById('right-character-image').src = character.image; // Replace 'image' with the actual property name for the image URL
    document.getElementById('right-character-name').textContent = character.name; // Replace 'name' with the actual property name for the name
});
