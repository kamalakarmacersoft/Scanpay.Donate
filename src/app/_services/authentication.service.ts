import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  //private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  private hasToken(): boolean {
    var result = !!localStorage.getItem('currentUser');
    console.log("hasToken : " + result);
    return result;
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
  /*get isLoggedIn() {
    return this.loggedIn.asObservable();
  }*/
  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router, ) { }

}