import {Action as NgrxAction} from '@ngrx/store';

export const INCREMENT_ACTION = '[Count] Increment Action';
export const DECREMENT_ACTION = '[Count] Decrement Action';
export const SET_COUNT_ACTION = '[Count] Set Action';

export interface Action extends NgrxAction {
  payload?: any;
}

export class IncrementCountAction implements Action {
  readonly type = INCREMENT_ACTION;
}

export class DecrementCountAction implements Action {
  readonly type = DECREMENT_ACTION;
}

export class SetCountAction implements Action {
  readonly type = SET_COUNT_ACTION;

  constructor(public payload: number) {
  }
}
