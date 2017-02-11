import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) {   }

 fetchData() {
  return this.http.get('https://myportfolio-bf2e1.firebaseio.com/.json')
                  .map((res: Response) => res.json());
}

}
