import Vue from 'vue';
import LuminescenceApp from './LuminescenceApp.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { LuminescenceApp },
  template: '<LuminescenceApp/>'
});
