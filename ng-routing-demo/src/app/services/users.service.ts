import { Injectable } from '@angular/core';
import { UserDetail } from '../model/user-detail';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<UserDetail> = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor(private loggingService: LoggingService) { }

  addUser(name: string) {
    this.loggingService.log("UsersService::addUser() called \n name=" + name);
    const newUser = new UserDetail(this.users.length, name);
    this.users.push(newUser);
  }

  getUsers(): Array<UserDetail> {
    return this.users.slice();
  }

  getUser(id: number): UserDetail {
    this.loggingService.log("UsersService::getUser() called \n id=" + id);

    //return new UserDetail(id, "TODO");

    const user = this.users.slice().find((u) => {
      return u.id === id;
    })

    return user;
  }
}
