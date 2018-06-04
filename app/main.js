import './src/css/main.scss';
import './data/cars.json';

// import './src/js/utils.js';
// import './src/js/main.js';


import Vue from 'vue';
import App from './containers/App/App.vue'

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})