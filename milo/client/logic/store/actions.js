export default {
  "source.create"({ state, payload }) {
    const { name } = payload;

    state.sources.push({
      id: Math.random().toString(),
      name,
    });
  },

  "detailedSupportersHistory.set"({ state, payload }) {
    const { values } = payload;

    state.detailedSupportersHistory = values;
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

  "authentication.clear"({ state }) {
    state.user = null;
    state.organization = null;
  },
};
