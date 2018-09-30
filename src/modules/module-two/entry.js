import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

const appOptions = {
  el: `#module-two`,
  router,
  store,
  render: (h) => h(App),
};

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions,
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
