import Vue from 'vue';
import Router from 'vue-router';
import IridescentBackdropBeams from '../components/backgrounds/IridescentBackdropBeams';
import IridescentBackdropDisks from '../components/backgrounds/IridescentBackdropDisks';
import IridescentBackdropGradients from '../components/backgrounds/IridescentBackdropGradients';
import IridescentBackdropPlanes from '../components/backgrounds/IridescentBackdropPlanes';

Vue.use(Router);

export const routes = [
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
    path: '/gradients',
    name: 'Gradients',
    component: IridescentBackdropGradients
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
