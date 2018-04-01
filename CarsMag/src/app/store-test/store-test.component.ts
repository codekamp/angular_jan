import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCounter, getUsers, RootState} from '../reducers/index';
import {DecrementCountAction, IncrementCountAction, SetCountAction} from '../actions/index';

@Component({
  selector: 'app-store-test',
  templateUrl: './store-test.component.html',
  styleUrls: ['./store-test.component.css']
})
export class StoreTestComponent implements OnInit {

  counterValue: number;

  constructor(private store: Store<RootState>) {
  }

  ngOnInit() {
    const counterObs = this.store.select(getCounter);

    counterObs.subscribe(value => {
      console.log('store value', value);
      this.counterValue = value;
    });
  }

  increment() {
    this.store.dispatch(new IncrementCountAction());
  }

  decrement() {
    this.store.dispatch(new DecrementCountAction());
  }

  set(newVal: number) {
    this.store.dispatch(new SetCountAction(newVal));
  }
}
