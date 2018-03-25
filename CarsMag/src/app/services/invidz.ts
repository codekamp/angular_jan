import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {Video} from '../models/video';

const BASE_URL = 'https://api.invidz.com/api/';
const TOKEN_KEY = 'login_token_key';

export class InvidzService {

  constructor(private http: HttpClient) {
  }

  public login(data: LoginRequest): Observable<User> {
    return this.get<LoginResponse>('authenticate', {...data})
      .map(response => {
        localStorage.setItem(TOKEN_KEY, response.token);
        return response.user;
      });
  }

  public getVideos(): Observable<Video[]> {

    // return Observable.of([
    //   {id: 10, title: 'My first video title'},
    //   {id: 33, title: 'A video with very very veryyyyyyyyyyyyy long title'}
    // ]);
    return this.get<{ data: Video[] }>('videos')
      .map(response => response.data);
  }

  private get<T>(url: string, queryParams: { [key: string]: string | string[] } = {}): Observable<T> {
    return this.http.get<T>(BASE_URL + url, {headers: this.getHeaders(), params: queryParams});
  }

  private post<T>() {
    const data = {name: 'Amit', age: 10};
    this.http.post('https://google.com', data, {headers: {}, params: {}});
  }

  private getHeaders(): { [header: string]: string | string[] } {
    const token = localStorage.getItem(TOKEN_KEY);
    return token ? {Authorization: 'bearer ' + token} : {};
  }


  // public test() {
  //   const a = {name: 'Amit', email: 'amit@gmail.com', phone: 998877};
  //   const b = {name: 'Sumit', phone: '9999887736'};
  //   const c = 'something';
  //
  //   const d = {...b, ...a, c}; // {name: 'Sumit', email: 'amit@gmail.com', phone: '99999}
  //
  //   const e = [10, 20, -99];
  //   const f = [...e];
  //   const g = e;
  //
  //   const xyz = {...a, email: 'sfsdfdsf'};
  //
  // }
}

export interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: User;
}


