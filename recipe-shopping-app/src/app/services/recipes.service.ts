import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelectedEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe(0, 'Chicken Tikka', 'Delicious', '/imgs/chicken-tikka-1-square.png'),
    new Recipe(1, 'Chicken Kabab', 'Yumm Yumm', '/imgs/chicken-kebab-1-square.jpg')
  ];

  constructor(private loggingService: LoggingServiceService) {
    loggingService.logInfo("RecipesService::constructor() called");
  }

  getRecipes(): Array<Recipe> {
    return this.recipes.slice(); //returns copy of this array instead of same array
  }

  getRecipe(id: number): Recipe {
    const recipe = this.getRecipes().find((r) => {
      return r.id == id;
    });
    return recipe;
  }

  addRecipe(name: string, description: string, imagePath: string) {
    this.loggingService.logInfo("RecipesService::addRecipe() called");
    this.loggingService.logInfo(
      " name = " + name +
      " desc = " + description +
      " imgPath = " + imagePath);

    this.recipes.push(
      {
        id: this.getRecipes().length,
        name: name,
        description: description,
        imagePath: imagePath
      }
    );
  }

  updateRecipe(id: number, name: string, description: string, imagePath: string) {

  }

  deleteRecipe(id: number) {

  }
}
