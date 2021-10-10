import TvShowDetailModel from './TvShowDetailModel'

class PeopleDetailModel {
    adult: boolean
    gender: number
    id: number
    known_for: Array<TvShowDetailModel>
    known_for_department: string
    name: string
    popularity: number
    profile_path: string
    constructor(adult: true, gender: 0, id: 0, known_for:[], known_for_department: '', name: '', popularity: 0, profile_path: '') {
        this.adult = adult
        this.gender = gender
        this.id = id
        this.known_for = known_for
        this.known_for_department = known_for_department
        this.name = name
        this.popularity = popularity,
        this.profile_path = profile_path
    }
}

export default PeopleDetailModel;