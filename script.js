const movieInput = document.getElementById('movieInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const movieList = document.getElementById('movieList');
const movieCount = document.getElementById('movieCount');

let movies = [];

// Function to update displayed list
function updateList() {
    movieList.innerHTML = '';
    movies.forEach((movie, index) => {
        const li = document.createElement('li');
        li.textContent = movie;
        li.addEventListener('click', () => removeMovie(index));
        movieList.appendChild(li);
    });
    movieCount.textContent = `Total Movies: ${movies.length}`;
}

// Function to add a movie
function addMovie() {
    const movieName = movieInput.value.trim();
    if (movieName === '') {
        alert('Please enter a movie name.');
        return;
    }
    movies.push(movieName);
    movieInput.value = '';
    updateList();
}

// Function to remove a movie when clicked
function removeMovie(index) {
    movies.splice(index, 1);
    updateList();
}

// Function to clear all movies
function clearList() {
    movies = [];
    updateList();
}

// Event listeners
addBtn.addEventListener('click', addMovie);
clearBtn.addEventListener('click', clearList);
movieInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addMovie();
});

// Initial display
updateList();
