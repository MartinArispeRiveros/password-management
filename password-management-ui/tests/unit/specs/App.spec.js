import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import App from '@/App';
import store from '../../../src/store/index';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, { store, localVue, stubs: ['router-link', 'router-view'] });
  });

  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
