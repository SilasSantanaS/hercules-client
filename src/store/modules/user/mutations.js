export const SIGNUP_USER = (state, payload) => {
  state.user = payload;
};

export const teste = (state, payload) => {
  state.teste = payload;
};

export const SET_LOADING = (state, payload) => {
  state.loading = payload;
};

export const SET_USER = (state, payload) => {
  state.user = payload;
};

export const CLEAR_USER = (state) => {
  state.user = null;
};
