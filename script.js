import  { APIURL, IMGPATH, SEARCHAPI } from './modules/endpoints.js';
import getMovies from './modules/fetchdata.js';


const mainEl = document.querySelector("#main");
const formEl = document.querySelector("#form");
const searchEl = document.querySelector("#search");

getMovies(APIURL);

export function createCards(movies) {
    mainEl.innerHTML = ""
    movies.forEach((movie) => {
        const movieCardEl = document.createElement("div");
        movieCardEl.classList.add("movie");

        movieCardEl.innerHTML = `
        <img 
        src="${IMGPATH + movie.poster_path}"
        alt="${movie.title}"
        />
        <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${
            movie.vote_average >= 8
            ? "green"
            : movie.vote_average >= 5 
            ? "orange"
            : "red"
        }">${movie.vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview:</h3>
        ${movie.overview}
        </div>
        `;
        mainEl.appendChild(movieCardEl);
    });
}

/*function getClassColor(vote) {
    if (vote >= 8) {
        return "green"
    }else if(vote >= 5){
        return "orange"
    }else{
        return "red"
    }
}*/

searchEl.addEventListener("keyup", () => {
        getMovies(SEARCHAPI+searchEl.value);
})

