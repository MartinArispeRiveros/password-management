// actions
const actions = {
  globalChangeNotifyModalDialog({ commit }, modalDialog) {
    commit('globalSetNotifyModalDialog', modalDialog);
  },
  globalSetRoute({ commit }, newRoute) {
    commit('globalSetRoute', newRoute);
  },
};

// mutations
const mutations = {
  globalSetNotifyModalDialog(state, modalDialog) {
    state.modal = {
      ...state.modal,
      ...modalDialog,
    };
  },
  globalSetRoute(state, newRoute) {
    state.currentRoute = newRoute;
  },
};

// initial state
const state = {
  currentRoute: '',
  snackBar: {
    color: 'info',
    duration: 4000,
    active: false,
    message: '',
  },
  modal: {
    color: 'primary',
    visible: false,
    message: '',
    actionName: '',
    icon: null,
    activeCustomAction: false,
    actionButtonColor: 'primary',
    cancelButtonColor: '#666666',
    buttonsLabel: {
      cancelButton: 'CANCELAR',
      confirmButton: 'CONFIRMAR',
    },
  },
};

export default {
  state,
  actions,
  mutations,
};
