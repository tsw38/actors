import { Variables } from 'utils';

export default async function(nextState = {}) {
  const celebrities = await Variables.axios(`${Variables.origin}/celebrities`);

  return celebrities.status === 200 ? celebrities.data : []
};
