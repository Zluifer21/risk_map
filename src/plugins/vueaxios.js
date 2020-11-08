import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
//import index from "@/store";
Vue.use(VueAxios, axios)
//Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;
//Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${index.getters.isLoggedIn}`;
export default new VueAxios({

});
