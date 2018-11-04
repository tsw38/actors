import {
  getAllCelebrities,
  getCelebInfo
} from 'actions';

const routes = [
  {
    routes: [
      {
        path: '/',
        exact:true,
        preRender2: () => getAllCelebrities.withDispatch(),
        preRender: async () => {
          const results = await getAllCelebrities.withoutDispatch();
          // console.warn('routes', celebrities);
          return {
            celebrities: results.data
          };
        },

      },
      {
        path: '/celebrity/:celebrity',
        exact: false,
        preRender2: () => {},
        preRender: async (celeb) => {
          const info = await getCelebInfo(celeb);
          return {
            current: celeb,
            celebrityList: {
              [celeb]: info
            },
            key: 'celebrity'
          }
        },

      },
    ]
  }
]

export default routes;
