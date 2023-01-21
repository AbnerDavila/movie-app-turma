import { createCards } from "../script.js";

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    createCards(respData.results);
}

export default getMovies;

