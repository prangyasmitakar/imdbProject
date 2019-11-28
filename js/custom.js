let search = document.getElementById('searchText');
search.addEventListener('keypress', e => {
    let searchText = e.target.value;
    getMovies(searchText);//calling getMovies function as callback function
});

function getMovies(searchText) {

    let api = `http://www.omdbapi.com/?s=${searchText}&apikey=e662c094`;
    window.fetch(api).then(data =>{
        //next step is converting Response data into json object ....

        // how to convert response data into json objects
let jsonData = data.json();
jsonData.then(movie => {
    let movies=movie.Search;
    let output='';
    for(let imdbMovie of  movies){
        output +=`
        <h1>${imdbMovie.Title}</h1>
        <p>${imdbMovie.Year}</p>
        <p>${imdbMovie.imdbID}</p>
        <p>${imdbMovie.Type}</p>
        <img src="${imdbMovie.Poster}"/> `;
       
        document.getElementById('template').innerHTML=output;

    }
    // if resolve exicuting then block....
})
.catch(err =>console.log(err));//if reject exicuting catch block
    })
    .catch(err =>console.log(err));//fetching data from omdb servser
}