class TvShowDetailModel {
    backdrop_path: string
    first_aired_date: Date
    genre_ids: Array<number>
    id: number
    name: string
    origin_country: Array<string>
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
    constructor(backdrop_path='', first_aired_date=new Date(), genre_ids=[], id=0, name='', origin_country=[], original_language='', original_name='', overview='', popularity=0, poster_path='', vote_average=0, vote_count=0) {
        this.backdrop_path = backdrop_path;
        this.first_aired_date = first_aired_date;
        this.genre_ids = genre_ids;
        this.id = id;
        this.name = name;
        this.origin_country = origin_country;
        this.original_language = original_language;
        this.original_name = original_name;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}

export default TvShowDetailModel;
