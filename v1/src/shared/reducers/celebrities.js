import {CelebrityConstants as CC} from 'shared/constants';

const celebrities = (state = {}, action) => {
    switch (action.type) {
        case CC.GET_ALL_CELEBRITIES_PENDING:
            console.warn('----------------------- Got all celebrities PENDING -----------------------');
            return state;
        case CC.GET_ALL_CELEBRITIES_COMPLETE:
            console.warn('----------------------- Got all celebrities COMPLETE -----------------------');
            return {
                ...state,
                ...action.payload
            }
        case CC.GET_ALL_CELEBRITIES:
        default:
            console.warn('action', action);
            return state;
    }
}

export default celebrities;
