import {getMovieReviewData} from "./data.js"

function init() {
    const movieReviewData =getMovieReviewData();
    paintStatistics(movieReviewData);
    paintMovieData(movieReviewData);
}
function paintStatistics(movieReviewData) {
    
    const flatReviewData=movieReviewData.flat();
    const totalMovie=movieReviewData.length;
    const totalReview=flatReviewData.length;
    const totalRating=flatReviewData.reduce((acc,item)=>{
        return acc = acc + item.rating;
    },0)
    const avrgRating = (totalRating/totalReview).toFixed(2);
    

    // Dom Manipulation
    const totalMovieEl = document.getElementById("totalMovie");
    addStat(totalMovieEl,totalMovie)
    const totalReviewEl = document.getElementById("totalReview");
    addStat(totalReviewEl,totalReview)
    const avrgRatingEl = document.getElementById("avrgRating");
    addStat(avrgRatingEl,avrgRating)
    
}

function addStat(element, value) {
    const spanEl = document.createElement("h2");
    spanEl.classList.add("text-xl");
    spanEl.innerText = value;
    element.appendChild(spanEl); 
}


function paintMovieData(movieReviewData) {
    const flatReviewData = movieReviewData.flat();
    const movieListEL = document.querySelector("#cardCointainer UL");
  
    flatReviewData.map((movie) => {
      console.log(movie);
  
      const liElem = document.createElement("li");
      liElem.classList.add("card_1", "p-2", "my-2");
  
      const titleElem = document.createElement("p");
      titleElem.classList.add("text-xl", "mb-2");
      titleElem.innerText = `${movie.title} - ${movie.rating}`;
      liElem.appendChild(titleElem);
  
      const reviewElem = document.createElement("p");
      reviewElem.classList.add("mx-2", "mb-2");
      reviewElem.innerText = movie.content;
      liElem.appendChild(reviewElem);
  
      const byEleme = document.createElement("p");
      byEleme.classList.add("mx-2", "mb-2");
      byEleme.innerText = `By ${movie.by} on ${new Intl.DateTimeFormat('en-IN').format(movie.on)}`;
      liElem.appendChild(byEleme);
  
      movieListEL.appendChild(liElem);
    })
  }

init();