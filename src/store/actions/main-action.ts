export const TOGGLE_SAVE_FILTER = 'TOGGLE_SAVE_FILTER';

export const toggleSaveFilter = (filters = {}) => {
    return {type: TOGGLE_SAVE_FILTER, filterList: filters};
}