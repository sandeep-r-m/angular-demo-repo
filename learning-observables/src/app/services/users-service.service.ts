import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  userActivate = new Subject();

  constructor() { }
}
