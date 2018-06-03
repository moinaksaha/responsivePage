import './src/css/main.scss';
import './data/cars.json';

import Vue from 'vue';
import App from './containers/App/App.vue'

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})