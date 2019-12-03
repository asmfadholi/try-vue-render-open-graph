import Vue from 'vue';
import VueHead from 'vue-head';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.use(VueHead);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
