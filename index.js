// action = {type : '', payload : ''};
const incCounter = { type: "INC_COUNTER", payload: 1 };
const decCounter = { type: "DEC_COUNTER", payload: 1 };

class Store {
  constructor(reducer, init) {
    (this.state = init), (this.reducer = reducer);
  }
  getState() {
    return this.state;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action); // updating state
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return { ...state, count: state.count + action.payload };

    case "DEC_COUNTER":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

const init = { count: 0 }; // initial state

const store = new Store(reducer, init);

// dispatch(action)
console.log(store.getState());
store.dispatch(incCounter);
console.log(store.getState());
store.dispatch(incCounter);
console.log(store.getState());
store.dispatch(decCounter);
console.log(store.getState());
store.dispatch(decCounter);
console.log(store.getState());

// action -> dispatch -> reducer -> store -> view (flux architecture)
