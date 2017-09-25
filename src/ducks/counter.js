// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

//CONSTANTS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//ACTIONS
export function increment(num) {
  return {
    type: INCREMENT,
    payload: num
  };
};

export function decrement(num) {
  return {
    type: DECREMENT,
    payload: num
  };
};

let initialState = {
  currentValue: 0
};

//REDUCER
export default function reducer(state=initialState, action){
  switch(action.type){
    case INCREMENT:
      let increNum = state.currentValue + action.payload;
      return Object.assign({}, state, {currentValue: increNum});
    case DECREMENT:
      let decreNum = state.currentValue - action.payload;
      return Object.assign({}, state, {currentValue: decreNum});
    default:
      return state;
  }
}
