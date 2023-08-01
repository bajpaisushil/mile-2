const apiKey = "8adc531a"; // Replace with your actual API key

document.getElementById('searchButton').addEventListener('click', () => {
    const movieTitle = document.getElementById('movieInput').value.trim();
    if (movieTitle === '') {
        alert('Please enter a movie title.');
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(movieTitle)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'False') {
                alert('No movies found. Please try another title.');
                return;
            }

            const movies = data.Search;
            const movieDetails = movies.map(movie => `
                <div class="movie-item">
                    <h2>${movie.Title}</h2>
                    <img src="${movie.Poster}" alt="${movie.Title} Poster">
                    <p><strong>Year:</strong> ${movie.Year}</p>
                </div>
            `).join('');

            document.getElementById('movieDetails').innerHTML = movieDetails;
        })
        .catch(error => console.error('Error fetching movie data:', error));
});

