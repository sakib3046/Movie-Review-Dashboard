import {getMovieReviewData} from "./data.js"

function init() {
    const movieReviewData =getMovieReviewData();

    paintStatistics(movieReviewData);
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
}

function addStat(element, value) {
    const spanEl = document.createElement("h2");
    spanEl.innerText = value;
    element.appendChild(spanEl); 
}

init();