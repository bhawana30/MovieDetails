// const myApi = b6e514a266a491afa37e50e315a953be
document.querySelector(".btn1").
addEventListener("click",function(){
    const query = document.querySelector("input").value;
    const url = ("https://api.themoviedb.org/3/search/movie?api_key=b6e514a266a491afa37e50e315a953be&language=en-US&page=1&include_adult=false&query="
    + query);
    
    fetch(url)
    .then(res => res.json())
    .then(data => handleEvent(data))
});
function getDetails(id){
    const url = ("https://api.themoviedb.org/3/movie/"+id+"?api_key=b6e514a266a491afa37e50e315a953be&language=en-US");
    fetch(url)
    .then(res => res.json())
    .then(data => printDetails(data))
}
function printDetails(data){
    document.querySelector(".card").style.visibility="visible";
    liele = document.getElementById("detailsmovie");
    let result = ""
    result +=
    `<h1 class="text-center title">${data.title}</h1><br>
    <img src = "https://image.tmdb.org/t/p/w200/${data.poster_path}">
    <li><h2 class ="rdate">Release Date : ${data.release_date}</h2></li><br>
    <li><h2 class="overview">Overview : ${data.overview}</h2></li><br>
    <li><h2 class="popularity">Popularity : ${data.popularity}</h2></li><br>
    <li><h2 class="Runtime">Runtime : ${data.runtime}</h2></li><br>
    <li><h2 class="genres">Genres :</h2></li>`
    if(data.genres.length>0){
        for(let i=0;i<data.genres.length;i++){
            result+=
              `<ul><li><h3> ${data.genres[i].name}</h3></li></ul>`
        }
        }else{
            result += 
            `<h2>Undefined</h2>`
        }
        result += `<br>
       
        <li><h2 class="genres">Production Companies :</h2></li>`
        if(data.
            production_companies.length>0){
            for(let i=0;i<data.
                production_companies.length;i++){
                result+=
                `<ul><li><h3> ${data.production_companies[i].name}</h3></li></ul>`
            }
            }else{
                result += 
                `<h2>Undefined</h2>`
            }
            result += `<br><br>`
    liele.innerHTML = result
}
function handleEvent(data){
    document.querySelector(".card").style.visibility="visible";
    liele = document.getElementById("detailsmovie");
    let result = ""
    for(let i=0;i<data.results.length;i++){
    result += `
    <h1>${data.results[i].title}</h1>
    <img src = "https://image.tmdb.org/t/p/w200/${data.results[i].poster_path}">
    <li>
    id : ${data.results[i].id}
    </li>
    <li>
    popularity: ${data.results[i].popularity}
    </li>
    <li>
    release_data: ${data.results[i].release_date}
    </li>
    <li>
    overview : ${data.results[i].overview}
    </li>
    <button class="btn btn-primary" onclick="getDetails(${data.results[i].id})" >Get Details</button>
    <br><hr>
    `}
    liele.innerHTML = result 
}
