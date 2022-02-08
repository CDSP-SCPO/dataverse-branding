import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function setup() {
  return new Vue({
    render: h => h(App),
  }).$mount('#app')
}

if (process.env.NODE_ENV != 'development') {
  document.addEventListener("DOMContentLoaded", function() { 
    // remove extra DV attributes
    let html = document.querySelector('html'); html.removeAttribute('xmlns'); html.removeAttribute('xml:lang');

    // replace html content by our own
    html.innerHTML = document.querySelector('#content').innerHTML;

    setup();
  });
} else {
  setup();
}
