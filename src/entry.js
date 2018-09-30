import { registerApplication, start } from 'single-spa';

function pathPrefix(prefix) {
  return function(location) {
    return location.hash.startsWith(`#${prefix}`);
  };
}

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
