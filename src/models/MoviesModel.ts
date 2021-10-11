import MovieDetailModel from "./MovieDetailModel";

class MovieDates {
    maximum: Date
    minimum: Date
    constructor(maximum= new Date(), minimum= new Date()) {
        this.maximum = maximum;
        this.minimum = minimum;
    }
}

class MoviesModel {
    dates: MovieDates
    page: number
    results:Array<MovieDetailModel>
    total_pages:number
    total_results:number
    constructor(page=0, results=[], total_pages=0, total_results=0, dates=new MovieDates()) {
        this.dates = dates;
        this.page = page;
        this.results = results;
        this.total_pages = total_pages;
        this.total_results = total_results;
    }
}

export default MoviesModel;