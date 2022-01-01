import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from './typed-vue';
// import Vue as VC from 'vue';
import Vuex, { Store } from 'vuex';
import App from './App.vue';

// const VueC: VueConstructor = '';

interface AppState {
  rate: number;
}

interface MyVue extends Vue {
  $store: Store<AppState>;
}

Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store<AppState>({
  state: (): AppState => ({
    rate: 1,
  }),
  mutations: {
    setExchangeRate(state, payload: number) {
      state.rate = payload;
    },
  },
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
