const moviesContainer = document.getElementById("moviesContainer");

document.addEventListener("DOMContentLoaded", () => {
  loadMovies();
});

document.addEventListener("scroll", () => {
  console.log(moviesContainer.children.length);
});

function loadMovies() {
  fetch("https://api.imdbapi.dev/titles")
    .then((res) => res.json())
    .then((data) => {
      const movies = data.titles;

      movies.forEach((movie, index) => {
        if (index > 9) return;

        const createMovieElement = document.createElement("li");

        createMovieElement.innerHTML = `
            <article class="movie">
              <span class="movie-number">${index + 1}</span>
              <img
                src="${movie.primaryImage.url}"
                alt="${movie.originalTitle} caratula"
              />
            </article>
        `;

        moviesContainer.append(createMovieElement);
      });
    });
}
