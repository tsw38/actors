import {
  GlobalActions,
  HomepageActions,
} from 'actions';

const routes = [
  {
    routes: [
      {
        path: '/',
        exact:true,
        preRender: async () => {
          const celebrities = await HomepageActions.celebrities.getCelebrities();
          return {
            ...HomepageActions.stateManager.initState(),
            celebrities,
            key: 'homepage'
          };
        }
      }
    ]
  }
]

export default routes;
