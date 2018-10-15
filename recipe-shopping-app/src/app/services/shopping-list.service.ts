import { Injectable, EventEmitter } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Array<Ingredient> = [
    new Ingredient(0, "Apples", 5),
    new Ingredient(1, "Tomatoes", 10)
  ];

  ingredientListChangedEvent: EventEmitter<Array<Ingredient>> = new EventEmitter();

  constructor(private loggingService: LoggingServiceService) {
    loggingService.logInfo("ShoppingListService::constructor() called");
  }

  getIngredients(): Array<Ingredient> {
    return this.ingredients.slice();
  }

  addIngredient(name: string, quantity: number) {
    this.loggingService.logInfo("ShoppingListService::addIngredient() called - \n name=" + name + "\n quantity=" + quantity);
    const newIngredient = new Ingredient(this.ingredients.length, name, quantity);
    this.ingredients.push(newIngredient);

    //Notify subscribers that ingredient array is changed
    this.ingredientListChangedEvent.emit(this.getIngredients());
  }

  updateIngredient(id: number, name: string, quantity: number) {

  }

  deleteIngredient(id: number) {

  }

}
