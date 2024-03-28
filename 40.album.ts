interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Making three dictionaries representing different albums
let album1 = make_album("Artist 1", "Album Title 1");
let album2 = make_album("Artist 2", "Album Title 2", 12); // Including number of tracks
let album3 = make_album("Artist 3", "Album Title 3");

// Printing each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
