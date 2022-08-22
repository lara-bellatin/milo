export default {
  "source.create"({ state, payload }) {
    const { name } = payload;

    state.sources.push({
      id: Math.random().toString(),
      name,
    });
  },

  "currentUser.set"({ state, payload }) {
    const { value } = payload;

    state.user = value;
  },

  "loginUser.set"({ state, payload }) {
    const { value } = payload;

    state.loginUser = value;
  },

  "authentication.clear"({ state }) {
    state.user = null;
    state.organization = null;
  },
};
