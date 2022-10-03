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


  "authentication.clear"({ state }) {
    state.user = null;
    state.organization = null;
  },

  "authentication.clear"({ state }) {
    state.user = null;
    state.organization = null;
  },
};
