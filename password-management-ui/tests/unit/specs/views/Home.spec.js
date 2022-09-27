import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Home from '@/views/Home';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);
document.body.setAttribute('data-app', true);

describe('Home.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      localVue,
    });
  });

  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
