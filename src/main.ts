import '@babel/polyfill';
import 'mutationobserver-shim';
import {createApp} from 'vue';
import vuetify from "./plugins/vuetify";
import App from './App.vue';
import router from './router';
import store from './store';

//components
import Icon from "@/components/Common/Icon/Icon.vue";

const app = createApp(App);

app.component('icon', Icon);


app.use(store);
app.use(store);
app.use(vuetify);
app.use(router)
app.mount('#app')
