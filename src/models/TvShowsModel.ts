import TvShowDetailModel from "./TvShowDetailModel";

class TVShowsModel {
    page: number
    results:Array<TvShowDetailModel>
    total_pages:number
    total_results:number
    constructor(page=0, results=[], total_pages=0, total_results=0) {
        this.page = page;
        this.results = results;
        this.total_pages = total_pages;
        this.total_results = total_results;
    }
}

export default TVShowsModel;