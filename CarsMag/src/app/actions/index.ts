import {Action} from '@ngrx/store';

export const INCREMENT_ACTION = '[Count] Increment Action';
export const DECREMENT_ACTION = '[Count] Decrement Action';
export const SET_COUNT_ACTION = '[Count] Set Action';

export interface MyAction extends Action {
  payload?: any;
}

export class IncrementCountAction implements MyAction {
  readonly type = INCREMENT_ACTION;
}

export class DecrementCountAction implements MyAction {
  readonly type = DECREMENT_ACTION;
}

export class SetCountAction implements MyAction {
  readonly type = SET_COUNT_ACTION;

  constructor(public payload: number) {
  }
}
