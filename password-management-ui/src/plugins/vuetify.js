import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E13D32',
        yellow: '#FFBE00',
        grey: '#394452',
        cyan: '#00C8FF',
        blue: '#64F0FF',
        silver: '#E6E6E6',
        secondary: '#00A3D9',
        background: '#EFF3F6',
        accent: '#00A3d9',
        danger: '#F01E46',
        link: '#0295F5',
        alert: '#B00020',
        error: '#ff4d58',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
