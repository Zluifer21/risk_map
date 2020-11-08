import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import vueaxios from "@/plugins/vueaxios";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
Vue.config.productionTip = false
new Vue({
  vuetify,
  vueaxios,
  render: h => h(App)
}).$mount('#app')
