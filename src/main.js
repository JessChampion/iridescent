import Vue from 'vue';

import IridescentApp from './IridescentApp';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { IridescentApp },
  template: '<IridescentApp/>'
});
