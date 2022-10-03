import { useState, useEffect } from "react";
import Store from "./store";
import actions from "./actions";

let store;

const set = ({ instance }) => {
  store = instance;
  return store;
};

const get = ({ initialState }) => {
  if (!store) {
    set({
      instance: new Store({
        state: initialState,
        actions,
      }),
    });
  } else {
    store.state = {
      ...store.state,
      ...initialState,
    };
  }

  return store;
};

const useStore = (stateObject) => {
  let instance = get({ initialState: stateObject });
  const id = Math.random().toString();
  const [state, setState] = useState(instance.state);

  useEffect(() => {
    const callback = (newState) => {
      setState(newState);
    };

    instance.subscribe({
      id,
      callback,
    });

    return () => {
      instance.unsubscribe({ id });
    };
  }, []);

  return {
    state,
    dispatch: instance.dispatch.bind(instance),
  };
};

export { set, get, useStore };
