import { Variables } from 'utils';

// Homepage actions
const getCelebrities = async (nextState = {}) => {
  const celebrities = await Variables.axios(`${Variables.origin}/celebrities`);

  return celebrities.status === 200 ? celebrities.data : []
};

export {
  getCelebrities
}
