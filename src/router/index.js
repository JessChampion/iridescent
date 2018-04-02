import Vue from 'vue';
import Router from 'vue-router';

import IridescentBackdrop from '../components/backgrounds/IridescentBackdrop';
import IridescentBackdropBeams from '../components/backgrounds/IridescentBackdropBeams';
import IridescentBackdropDisks from '../components/backgrounds/IridescentBackdropDisks';
import IridescentBackdropPlanes from '../components/backgrounds/IridescentBackdropPlanes';

Vue.use(Router);

export const routes = [
  {
    path: '/plain',
    name: 'plain',
    component: IridescentBackdrop
  },
  {
    path: '/beams',
    alias: '/',
    name: 'Beams',
    component: IridescentBackdropBeams
  },
  {
    path: '/disks',
    name: 'Disks',
    component: IridescentBackdropDisks
  },
  {
    path: '/planes',
    name: 'Planes',
    component: IridescentBackdropPlanes
  }
];

export default new Router({
  routes
});
