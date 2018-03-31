import Vue from 'vue';

import IridescentApp from './IridescentApp';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { IridescentApp },
  template: '<IridescentApp/>'
});
