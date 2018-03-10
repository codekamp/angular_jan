import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export const EVENT_STUDENT_ADDED = 'on dear student added';

export function helloWorld() {
  console.log('hello world!');
}

export class EventBus {
  private bus = new Subject<EventBusData>();

  emit(eventName: string, data: any) {
    this.bus.next({eventName: eventName, data: data});
  }

  on<A>(eventName: string): Observable<A> {
    return this.bus.asObservable()
      .filter(event => event.eventName === eventName)
      .map(event => event.data as A);
  }
}

interface EventBusData {
  eventName: string;
  data: any;
}

