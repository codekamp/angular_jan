import {Subject} from 'rxjs/Subject';
import {Error} from '../models/error';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

export class ErrorService {
  private subject = new Subject<Error>();

  all(): Observable<Error> {
    return this.subject.asObservable();
  }

  only(code: number): Observable<Error> {
    return this.subject.asObservable().filter((err: Error) => err.code === code);
  }

  emit(model: Error) {
    this.subject.next(model);
  }

  exclude(codes: number[]): Observable<Error> {
    return this.subject.asObservable().filter((err: Error) => !_.includes(codes, err.code));
  }
}
