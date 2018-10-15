import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { LoggingServiceService } from '../../services/logging-service.service';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //Define empty array. Initialized using recipesService service instance in ngOnInit() method below.
  recipes: Array<Recipe> = [];

  //Commenting below method: Using services for cross-component communication
  //@Output() recipeItemWasClickedEvent = new EventEmitter<Recipe>();

  //Using constructor parameters, we also tell Angular to inject service instances
  constructor(private loggingService: LoggingServiceService, private recipesService: RecipesService) {
    loggingService.logInfo("RecipeListComponent::constructor() called");
  }

  ngOnInit() {
    this.loggingService.logInfo("RecipeListComponent::ngOnInit() called");

    //On init load recipes by calling service
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipeBtnClick() {

    this.loggingService.logInfo("RecipeListComponent::onNewRecipeBtnClick() called");

    //this.recipes.push(new Recipe('Chicken Tikka', 'Blah Blah Blah', 'Loading image...'));
    this.recipesService.addRecipe("Chicken Tandoori", "Juicy", "");

    // Get updated recipes from service
    this.recipes = this.recipesService.getRecipes();
  }

  /*
    Commenting below method: Using services for cross-component communication
  */
  /*
   onRecipeItemClickEvent(recipe: Recipe) {
     this.loggingService.logInfo("RecipeListComponent::onRecipeItemClickEvent() called");
     this.loggingService.logInfo("" + recipe);
 
     this.recipeItemWasClickedEvent.emit(recipe);
   }
   */

}
