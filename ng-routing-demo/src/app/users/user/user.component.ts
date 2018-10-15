import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { UserDetail } from '../../model/user-detail';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  //Used for UI
  user: UserDetail = new UserDetail(0, "");

  constructor(private currentRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {

    //Subscribe to URL param changes using ActivateRoute object
    this.currentRoute.params.subscribe((params: Params) => {
      this.user = this.usersService.getUser(+params['id'])
    });

  }

  ngOnDestroy() {

  }

}
