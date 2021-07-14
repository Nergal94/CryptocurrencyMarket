import '@babel/polyfill';
import 'mutationobserver-shim';
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Icon from "@/components/Common/Icon/Icon.vue";

//components


const app = createApp(App);

app.component('icon', Icon);


app.use(store);
app.use(store);

app.use(router)
app.mount('#app')
