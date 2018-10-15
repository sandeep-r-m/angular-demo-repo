import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoggingServiceService } from './logging-service.service';
import { RecipesService } from './recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsResolverService implements Resolve<Recipe> {

  constructor(
    private loggingService: LoggingServiceService,
    private recipesService: RecipesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Promise<Recipe> | Observable<Recipe> {

    const recipeId = +route.params['id']; // + to typecasting to number datatype

    const recipe = this.recipesService.getRecipe(recipeId);

    return recipe;
  }


}
