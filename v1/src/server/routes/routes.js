import {
  GlobalActions,
  HomepageActions,
} from '../../shared/actions';

const routes = [
  {
    routes: [
      {
        path: '/',
        exact:true,
        preRender: async () => {
          // const requiredToRender = await GlobalActions.imagesHelper.getAllImages(true);
          return {
            // ...HomepageActions.stateManager.initState(),
            // images: requiredToRender,
            key: 'homepage'
          };
        }
      }
    ]
  }
]

export default routes;
