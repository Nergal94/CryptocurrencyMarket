import '@babel/polyfill';
import 'mutationobserver-shim';
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//components
import Icon from '@/components/Common/Icon/Icon.vue';
import VTable from "@/components/Common/VTable/VTable.vue";

//filters
import filters from "@/filters/filters";

const app = createApp(App);

app.component('icon', Icon);
app.component('v-table', VTable);

app.config.globalProperties.$filters = filters;

app.use(store);
app.use(store);
app.use(router)
app.mount('#app')
