class PopularMoviesResults {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: Date
    title: string
    vote_average: number
    vote_count: number
    constructor(adult=false, backdrop_path='', genre_ids=[], id=0, original_language='', original_title='', overview='', popularity=0, poster_path='', release_date=new Date(), title='', vote_average=0, vote_count=0) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.genre_ids = genre_ids;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}

class PopularMoviesModel {
    page: number
    results:Array<PopularMoviesResults>
    total_pages:number
    total_results:number
    constructor(page=0, results=[], total_pages=0, total_results=0) {
        this.page = page;
        this.results = results;
        this.total_pages = total_pages;
        this.total_results = total_results;
    }
}

export default PopularMoviesModel;