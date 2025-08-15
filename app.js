const apikey= '';

function searchMovie(){
    const title=document.getElementById('ss').value;
    const movieinfo = document.getElementById('movie-info');
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`)
        .then(response=>response.json())
        .then(data=>{
            if(data.Response==='True'){
                document.querySelector('#movie-title').textContent = `${data.Title} (${data.Year})`;
                document.querySelector('#movie-poster').src = data.Poster;
                document.querySelector('#movie-director').textContent = data.Director;
                document.querySelector('#movie-plot').textContent = data.Plot;
                document.querySelector('#movie-rating').textContent = data.imdbRating;
                
                document.querySelector('#error').textContent = '';
                movieinfo.style.display = 'flex';
            } else {
                document.querySelector('#error').textContent = '영화를 찾을 수 없습니다.';
                movieinfo.style.display='none';
            }      
        })
}
