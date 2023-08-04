let Song = function(title,artist) {
    this.title = title;
    this.artist = artist;
}

Song.prototype.printName = function() {
    console.log('Playing:' + this.title + ' by ' + this.artist);
}

const song1 = new Song('ข้างกัน', 'Three man down');
const song2 = new Song('วันเกิดฉันปีนี้', 'Three man down');

song1.printName();
song2.printName();