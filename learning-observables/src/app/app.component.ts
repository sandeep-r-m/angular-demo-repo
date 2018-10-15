import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersServiceService } from './services/users-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'learning-observables';
  user1Activated: boolean = false;
  user2Activated: boolean = false;
  userActivateSubscription: Subscription;

  constructor(private usersService: UsersServiceService) { }

  ngOnInit(): void {

    this.userActivateSubscription = this.usersService.userActivate.subscribe((id: number) => {

      this.user1Activated = false;
      this.user2Activated = false;

      if (id === 1) {
        this.user1Activated = true;
      } else if (id === 2) {
        this.user2Activated = true;
      }

    });

  }
  ngOnDestroy(): void {
    this.userActivateSubscription.unsubscribe();
  }

  onActivate(id: number) {
    this.usersService.userActivate.next(id);
  }


}
