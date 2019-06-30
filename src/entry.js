import { registerApplication, start } from 'single-spa';
import './style.less';

const pathPrefix = (prefix) => (location) => location.pathname.startsWith(prefix);

function loadApplications() {
  registerApplication(
    'module-one',
    () => import('./modules/module-one/entry.js'),
    pathPrefix('/module-one'),
  );
  registerApplication(
    'module-two',
    () => import('./modules/module-two/entry.js'),
    pathPrefix('/module-two'),
  );

  start();
}

loadApplications();
