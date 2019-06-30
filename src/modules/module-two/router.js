import Vue from 'vue';
import Router from 'vue-router';

const APP_NAME = 'module-two';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: `/${APP_NAME}`,
      name: APP_NAME,
      redirect: { name: `${APP_NAME}.page-a` },
      component: () => import(/* webpackChunkName: "module-two-index" */ './views/Index.vue'),
      children: [
        {
          path: 'page-a',
          name: `${APP_NAME}.page-a`,
          component: () => import(/* webpackChunkName: "module-two-a" */ './views/PageA.vue'),
        },
        {
          path: 'page-b',
          name: `${APP_NAME}.page-b`,
          component: () => import(/* webpackChunkName: "module-two-b" */ './views/PageB.vue'),
        },
      ],
    },
  ],
});
