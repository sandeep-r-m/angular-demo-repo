import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { LoggingServiceService } from '../services/logging-service.service';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private loggingService: LoggingServiceService, private recipeService: RecipesService) {
    loggingService.logInfo("RecipesComponent::constructor() called");
  }

  ngOnInit() {
    this.loggingService.logInfo("RecipesComponent::ngOnInit() called");

    //Using services for cross-component communication
    //Subscribe to selectedRecipe event to get the selection
    this.recipeService.recipeSelectedEvent.subscribe((selectedRecipe: Recipe) => {
      this.selectedRecipe = selectedRecipe;
    });

  }

  /*
    Commenting below method: Using services for cross-component communication
  */
  /*
   onRecipeItemWasClickedEvent(recipe: Recipe) {
     this.loggingService.logInfo("RecipesComponent::onRecipeItemWasClickedEvent() called");
     this.loggingService.logInfo("" + recipe);
 
     this.selectedRecipe = recipe;
   }
   */

}
