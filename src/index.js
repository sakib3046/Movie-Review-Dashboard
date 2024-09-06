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
        
    }
}

init();