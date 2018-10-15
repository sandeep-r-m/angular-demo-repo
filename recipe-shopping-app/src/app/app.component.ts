import { Component } from '@angular/core';
import { LoggingServiceService } from './services/logging-service.service';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* 
    Defining logging, recipes service instance at this level enables 
    all child components to access this same instance.
  */
  providers: [LoggingServiceService, RecipesService]
})
export class AppComponent {

  constructor(
    private loggingService: LoggingServiceService,
    private recipesService: RecipesService) {
    loggingService.logInfo("AppComponent::constructor() called")
  }

  //navTabSelected: string = "recipes";

  /*
  onNavTabSelectedEvent(navTabSelected: string) {
    this.loggingService.logInfo("AppComponent::onNavTabSelectedEvent() called");
    this.loggingService.logInfo("navTabSelected = " + navTabSelected);
    this.navTabSelected = navTabSelected;
  }
  */

}
