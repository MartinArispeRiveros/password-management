import passwordCardsApi from '@/api/password-cards';

// actions
const actions = {
  callGetPasswordCard(...args) {
    return passwordCardsApi.getPasswordCard(args[1]);
  },
  callGetPasswordCards(...args) {
    return passwordCardsApi.getPasswordCards(args[1]);
  },
  callPostPasswordCard(...args) {
    return passwordCardsApi.postPasswordCard(args[1]);
  },
  callPutPasswordCard(...args) {
    return passwordCardsApi.putPasswordCard(args[1]);
  },
  callDeletePasswordCard(...args) {
    return passwordCardsApi.deletePasswordCard(args[1]);
  },
};
// mutations
const mutations = {
};
// initial state
const state = {
};
export default {
  state,
  actions,
  mutations,
};
