// Grabbing classes then assigning vars to the search container, search box, search button + movie info where the title + cover will be stored
let searchContainer = document.querySelector('.search-container');
let searchBox = document.querySelector('.search-box');
let searchButton = document.querySelector('.search-button');
let movieInfo = document.querySelector('.movie-info');




// Used this link to get the URLs: https://www.themoviedb.org/talk/60d88586b7fbbd0080974113#60d88586b7fbbd0080974116
// API key = 956679ad57b0b5ed73d5db018b622a7d
let searchApi =
    "https://api.themoviedb.org/3/search/movie?&api_key=956679ad57b0b5ed73d5db018b622a7d&query=";
let apiKey = 'https://api.themoviedb.org/3/movie/550?api_key=956679ad57b0b5ed73d5db018b622a7d';
let imgUrl = 'https://image.tmdb.org/t/p/w500';

// Used this to figure out how to write this fetch request:
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

displayMovieList(apiKey);
function displayMovieList(url){
    fetch(url).then(response => response.json()).then(function(data)
    {

    data.results.forEach(element => {
        let newDivElement = document.createElement('div');
        let movieTitleText = document.createElement('h2');
        let movieCover = document.createElement('img');
        
        movieInfo.appendChild(newDivElement);
        newDivElement.appendChild(movieTitleText);
        newDivElement.appendChild(movieCover);
        movieTitleText.innerText = element.title;
        movieCover.src = `${imgUrl}${element.poster_path}`;
    }); 
});
}

// This click event ensures that when the search button is clicked that the displayMovieList function is run
searchButton.addEventListener('click', (event) => {
    // console.log(searchBox.value);
    // searchBox.value (searchCharacterInput) will show an empty string '' 
    let searchCharacterInput = searchBox.value;
    movieInfo.innerText = null;

    if (searchCharacterInput) {
        searchBox.value === null;
        displayMovieList(`${searchApi}${searchCharacterInput}`);
    }
});

// This submit event ensures that when the user presses 'return' or 'enter', the displayMovieList function is run

searchContainer.addEventListener('submit', (event) => {
     
    let searchCharacterInput = searchBox.value;
    movieInfo.innerText = null;
    event.preventDefault();

    if (searchCharacterInput) {
        searchBox.value === null;
        displayMovieList(`${searchApi}${searchCharacterInput}`);
    }
});




