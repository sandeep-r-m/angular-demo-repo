import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { LoggingServiceService } from '../../../services/logging-service.service';
import { RecipesService } from '../../../services/recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private loggingService: LoggingServiceService, private recipeService: RecipesService) {
    loggingService.logInfo("RecipeItemComponent::constructor() called");
  }


  @Input('recipe-item') recipe: Recipe;

  // A way to define Recipe type. Instead of using above.
  //@Input('recipe-item') recipe: { name: string, description: string, imagePath: string };

  /* IMPROVEMENT-1 :  Using services we can directly pass data across components. 
     No need to use EventEmitters to propogate events from child component to parent and so on.
     It simplifies cross-component communication greatly.
  */
  //@Output() recipeItemClickEvent = new EventEmitter<void>();

  ngOnInit() {
    this.loggingService.logInfo("RecipeItemComponent::ngOnInit() called");
  }

  /*
  onRecipeItemClick() {
    this.loggingService.logInfo("RecipeItemComponent::onRecipeItemClick() called");

    //IMPROVEMENT-1
    //this.recipeItemClickEvent.emit();

    //Directly send data to service
    this.recipeService.recipeSelectedEvent.emit(this.recipe);
  }
  */

}
