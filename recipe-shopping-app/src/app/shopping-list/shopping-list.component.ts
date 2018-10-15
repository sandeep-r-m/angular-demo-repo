import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { LoggingServiceService } from '../services/logging-service.service';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers:[LoggingServiceService] Using same instance defined at AppComponent level (Hierachical injection concept)
})
export class ShoppingListComponent implements OnInit {

  //Using service to hold this data. This field is for UI to avoid direct access to array
  ingredients: Array<Ingredient> = [];

  constructor(private loggingService: LoggingServiceService, private shoppingListService: ShoppingListService) {
    loggingService.logInfo("ShoppingListComponent::constructor() called");
  }

  ngOnInit() {
    this.loggingService.logInfo("ShoppingListComponent::ngOnInit() called");
    this.ingredients = this.shoppingListService.getIngredients();

    //Subscribe to service's ingredient added event
    this.shoppingListService.ingredientListChangedEvent.subscribe(
      (ingredients: Array<Ingredient>) => {
        //Update this list with new list received as event data
        this.ingredients = ingredients;
      }
    );
  }

  /*
  Commenting below method because using services for cross-component communication
  */
  /*
   onIngridientAddedEvent(ingredient: Ingredient) {
     this.loggingService.logInfo("ShoppingListComponent::onIngridientAddedEvent() called");
     this.loggingService.logInfo("" + ingredient);
 
   }
   */

}
