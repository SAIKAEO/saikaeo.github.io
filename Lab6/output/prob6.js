// Constructor function for Song
function Song(title, artist) {
    this.title = title; // Adding title as a property
    this.artist = artist; // Adding artist as a property
}

// Adding a method to the prototype of Song
Song.prototype.play = function() {
    console.log('Playing: ' + this.title + ' by ' + this.artist);
};

// Create instances of Song with your favorite songs
const song1 = new Song('Money', 'Lisa');
const song2 = new Song('ชีวิตยังคงสวยงาม', 'Bodyslam');

// Test the play method
song1.play(); // Output: Playing: Bohemian Rhapsody by Queen
song2.play(); // Output: Playing: Hotel California by Eagles