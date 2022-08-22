export default class Store {
  constructor({ state = {}, actions = {} }) {
    this.state = state;
    this.actions = actions;
    this.subscribers = [];
  }

  subscribe({ id, callback }) {
    this.subscribers.push({ id, callback });
  }

  unsubscribe({ id }) {
    const index = this.subscribers.findIndex((subscriber) => subscriber.id === id);

    this.subscribers.splice(index, 1);
  }

  publish() {
    return this.subscribers.map((subscriber) => {
      const { callback } = subscriber;
      callback(this.state);
    });
  }

  dispatch({ action, payload }) {
    const self = this;

    this.actions[action]({
      state: self.state,
      payload,
    });

    self.state = JSON.parse(JSON.stringify(self.state));

    self.publish();
  }
}
