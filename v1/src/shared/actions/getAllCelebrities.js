import { Variables } from 'utils';
import {CelebrityConstants as CC} from 'shared/constants';

export function withDispatch() {
    return (dispatch) => {
        dispatch({
            type: CC.GET_ALL_CELEBRITIES_PENDING,
            payload: {}
        });

        return Variables.axios(`${Variables.origin}/celebrities`)
            .then((results) => {
                // console.warn('results', results.data);
                dispatch({
                    type: CC.GET_ALL_CELEBRITIES_COMPLETE,
                    payload: results.status === 200 ? results.data : []
                })
        });
    }
};

export async function withoutDispatch() {
    const results = await Variables.axios(`${Variables.origin}/celebrities`);
    return results;
}
