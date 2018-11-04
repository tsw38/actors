import { Variables } from 'utils';
import {CelebrityConstants as CC} from 'shared/constants';

export default (name) => {
    return (dispatch) => {
        dispatch({
            type: CC.GET_CELEBRITY_PENDING,
            payload: {}
        });

        return Variables.axios(`${Variables.origin}/search?celebrity=${celeb}`)
            .then((results) => {
                console.warn('results', results);
                dispatch({
                    type: CC.GET_CELEBRITY_COMPLETE,
                    payload: {
                        name,
                        movies: data.results.data
                    }
            })
        })
    }
};
