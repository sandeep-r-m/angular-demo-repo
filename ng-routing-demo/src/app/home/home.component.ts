import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private loggingService: LoggingService,
    private router: Router,
    private currentRoute: ActivatedRoute, //gives current activate route
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLoadServersClick() {
    //Programmatically load paths
    //this.router.navigate(["/servers"]); //does not account relative to path
    this.router.navigate(["servers"], { relativeTo: this.currentRoute }); // accouts relative to path
  }

  onLoginClick() {
    this.loggingService.log("HomeComponent::onLoginClick()");
    this.authService.login();
  }

  onLogoutClick() {
    this.loggingService.log("HomeComponent::onLogoutClick()");
    this.authService.logout();
  }

}
