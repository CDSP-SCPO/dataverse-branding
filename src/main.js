import { createApp } from 'vue';
import App from './App.vue';

if (process.env.NODE_ENV !== 'development') {
  document.addEventListener("DOMContentLoaded", function() {
    const html = document.querySelector("html");
    const head = document.createElement("head");
    const body = document.createElement("body");

    // remove extra DV attributes
    html.removeAttribute("xmlns");
    html.removeAttribute("xml:lang");
    head.removeAttribute("id");

    // move content to head and body
    document.querySelectorAll("#content > :not(div):not(script):not(noscript)").forEach(e => head.appendChild(e));
    document.querySelectorAll("#content > *").forEach(e => body.appendChild(e));

    // remove old head and body
    document.querySelector("head").remove();
    document.querySelector("body").remove();

    html.appendChild(head);
    html.appendChild(body);
  });
}

createApp(App).mount('#app');
