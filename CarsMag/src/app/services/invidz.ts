import {HttpClient} from '@angular/common/http';

const BASE_URL = 'https://api.invidz.com/api/';

export class InvidzService {

  constructor(private http: HttpClient) {
  }

  public login(data: LoginRequest) {
    this.http.get(BASE_URL + 'authenticate', {params: {...data}});
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


