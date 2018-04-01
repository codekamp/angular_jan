import {User} from '../models/user';
import {DECREMENT_ACTION, INCREMENT_ACTION, MyAction, SET_COUNT_ACTION} from '../actions/index';
import {ActionReducerMap} from '@ngrx/store';


export interface CounterState {
  counter: number;
}

export const initialCounterState: CounterState = {
  counter: 99
};

export interface UserState {
  bestUser: User;
  worstUser: User;
  allUsers: User[];
}

export const initialUserState: UserState = {
  bestUser: null,
  worstUser: null,
  allUsers: []
};

export interface RootState {
  counterState: CounterState;
  userState: UserState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  counterState: counterReducer,
  userState: userReducer
}

// For a function to be a reducer it should:
// 1. pure function
// 2. should take state and action in params
// 3. should return new state
// 4. should be non mutating
export function counterReducer(state: CounterState = initialCounterState, action: MyAction) {
  console.log('counterReducer', state, action);
  switch (action.type) {
    case INCREMENT_ACTION:
      return {...state, counter: ++state.counter};
    case DECREMENT_ACTION:
      return {...state, counter: --state.counter};
    case SET_COUNT_ACTION:
      return {...state, counter: action.payload};
    default:
      return state;
  }
}

export function userReducer(state: UserState = initialUserState, action: MyAction) {
  console.log('userReducer', state, action);
  return state;
}


// For a function to be a selector function it should be:
// 1. pure function
// 2. take only and only state in params.

export const getCounter = (state: RootState) => state.counterState.counter;

export function getUsers(state: RootState) {
  return state.userState.allUsers;
}
