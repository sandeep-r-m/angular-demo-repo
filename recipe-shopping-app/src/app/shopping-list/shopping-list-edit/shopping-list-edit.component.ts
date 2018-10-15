import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient';
import { LoggingServiceService } from '../../services/logging-service.service';
import { ShoppingListService } from '../../services/shopping-list.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
  providers: []
})
export class ShoppingListEditComponent implements OnInit {

  //Way to get data from Html INPUT fields
  @ViewChild("ingredientName") ingredientNameElementRef: ElementRef;
  @ViewChild("ingredientQuantity") ingredientQuantityElementRef: ElementRef;

  //Commenting below code : Using service for cross-component communication
  //@Output() ingridientAddedEvent = new EventEmitter<Ingredient>();

  constructor(
    private loggingService: LoggingServiceService,
    private shoppingListService: ShoppingListService) {
    loggingService.logInfo("ShoppingListEditComponent::constructor() called");
  }

  ngOnInit() {
    this.loggingService.logInfo("ShoppingListEditComponent::ngOnInit() called");
  }

  onIngredientAddClick() {

    this.loggingService.logInfo("ShoppingListEditComponent::onIngredientAddClick() called");

    const name = this.ingredientNameElementRef.nativeElement.value;
    const quantity = this.ingredientQuantityElementRef.nativeElement.value;

    this.loggingService.logInfo("\n ingredientName = " + name + "\n ingredientQuantity = " + quantity);

    // Using service to hold data and operations on it
    this.shoppingListService.addIngredient(name, quantity);

    //Commenting below code : Using service for cross-component communication
    //this.ingridientAddedEvent.emit(ingredient);

  }
}
