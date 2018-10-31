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
        preRender: async () => {
          const celebrities = await getAllCelebrities();
          return {
            celebrities,
            key: 'homepage'
          };
        }
      },
      {
        path: '/celebrity/:celebrity',
        exact: false,
        preRender: async (celeb) => {
          const info = await getInfo(celeb);
          return {
            celebrityList: {
              current: celeb,
              [celeb]: info
            },
            key: 'celebrities'
          }
        }
      },
    ]
  }
]

export default routes;
