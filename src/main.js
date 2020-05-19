import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

if (process.env.NODE_ENV != 'development') {
  // remove extra DV attributes
  let html = document.querySelector('html'); html.removeAttribute('xmlns'); html.removeAttribute('xml:lang');
  let head = document.querySelector('head'); head.removeAttribute('id');

  // remove everything except our content
  document.querySelectorAll('body > :not(#content)').forEach(e => e.parentNode.removeChild(e));

  // remove every head elements
  document.querySelectorAll('head > *').forEach(e => e.parentNode.removeChild(e));

  // move elements in the head
  document.querySelectorAll('#content > :not(div):not(script)').forEach(e => head.appendChild(e));

  // move content in the body (outside of the #content div)
  let body = document.querySelector('body');
  document.querySelectorAll('#content > *').forEach(e => body.appendChild(e));
  document.querySelector('#content').remove();
}

new Vue({
  render: h => h(App),
}).$mount('#app')
