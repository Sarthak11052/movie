
      const apikey="api_key=b69ceac7c576e292793d7d88239a49df";
      const baseurl="https://api.themoviedb.org/3"
      const apiurl=baseurl+"/discover/movie?sort_by=popularity.desc&"+apikey
      const imageurl='https://images.tmdb.org/t/p/w500'
      const main=document.getElementById("main")
      const form= document.getElementById("form");
      const search= document.getElementById("search");
      const searchurl=baseurl+'/search/movie?'+apikey;
getmovies(apiurl)
      function getmovies(url){
        fetch(url).then(res=>res.json()).then(data=>{
          showmovies(data.results)
        })
      }
      function showmovies(data) {
        main.innerHTML="";
        data.forEach(movie=>{
          const{title,poster_path, vote_average, overview}=movie
          const movieEl= document.createElement('div');
          movieEl.classList.add('movie');
          movieEl.innerHTML=`
          <img src="${imageurl+poster_path}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                      <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="rating">Rating: </span><span class="${getcolor(vote_average)}"> ${ vote_average}</span>
                      </div>
                      <p class="card-text" id="m2" ></p>
                    </div>
          
          
          
          
          `
          main.appendChild(movieEl)
        })
      }

      function getcolor(vote) {
        if(vote>=8)return "green";
        else if(vote>=5)return "orange"
        else{
          return 'red'
        }
      }

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const searchterm=search.value
  if(searchterm){
    getmovies(searchurl+"&query="+searchterm)
  }
})