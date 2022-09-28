import axios from 'axios';

const BASE_URL = '/password-cards';

const passwordCards = {
  getPasswordCards(args) {
    return axios.get(BASE_URL, {
      params: { ...args },
    });
  },
  getPasswordCard(uid) {
    return axios.get(`${BASE_URL}/${id}`);
  },
  postPasswordCard(args) {
    return axios.post(`${BASE_URL}`, args);
  },
  putPasswordCard(args) {
    return axios.patch(`${BASE_URL}/${args.id}`, args);
  },
  deletePasswordCard(args) {
    return axios.delete(`${BASE_URL}/${args.id}`, { data: args });
  },
};

export default passwordCards;
