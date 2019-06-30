import Vue from 'vue';
import Router from 'vue-router';

const APP_NAME = 'module-one';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: `/${APP_NAME}`,
      name: APP_NAME,
      redirect: { name: `${APP_NAME}.page-a` },
      component: () => import(/* webpackChunkName: "module-one-index" */ './views/Index.vue'),
      children: [
        {
          path: 'page-a',
          name: `${APP_NAME}.page-a`,
          component: () => import(/* webpackChunkName: "module-one-a" */ './views/PageA.vue'),
        },
        {
          path: 'page-b',
          name: `${APP_NAME}.page-b`,
          component: () => import(/* webpackChunkName: "module-one-b" */ './views/PageB.vue'),
        },
      ],
    },
  ],
});
