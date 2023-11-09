var inputElement = document.getElementById("movie-name")
var movieSearchBtn = document.getElementById("search-btn");
var movieWrapperElement = document.getElementById("movies-wrapper");
var movieStatusElement = document.getElementById("status");

movieSearchBtn.addEventListener("click", function(){
    movieWrapperElement.innerHTML=""
    movieStatusElement.innerText=""
    movieStatusElement.innerText="Loading...................."

    fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${inputElement.value}`)
    .then((res)=>{
        return res.json()
    }) .then((res2)=>{
        if(res2.Response =="True"){
        movieStatusElement.innerText=""
            var movieDetails = res2.Search
            movieDetails.map((movie,i)=>{
                var movieBoxElement = document.createElement("div");
                movieBoxElement.className = "movie-box"
                var movieImageElement = document.createElement("img");
                movieImageElement.className = "movie-poster"
                movieImageElement.src = movie.Poster
                var movieTitleElement = document.createElement("P");
                movieTitleElement.innerHTML = `Title:<b>${movie.Title}</b>`
                var movieDescriptionElement = document.createElement("P");
                movieDescriptionElement.innerHTML = `Description:<b>${movie.Description}</b>`
                var movieReleaseYearElement = document.createElement("p");
                movieReleaseYearElement.innerHTML = `Release Year:<b>${movie.Year}</b>`
                movieBoxElement.append(movieImageElement,movieTitleElement,movieDescriptionElement,movieReleaseYearElement);
                movieWrapperElement.appendChild(movieBoxElement)
            })
        }else{
        movieStatusElement.innerText=""

        movieStatusElement.innerText = "404 Movies not found!!"
        console.log("movie not found!!")

    }
})
})