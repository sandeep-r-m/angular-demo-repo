import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { LoggingServiceService } from '../../services/logging-service.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: []
})
export class RecipeDetailComponent implements OnInit {

  //@Input() recipe: Recipe;

  recipe: Recipe;

  constructor(
    private loggingService: LoggingServiceService,
    private activateRoute: ActivatedRoute) {
    loggingService.logInfo("RecipeDetailComponent::constructor() called");
  }

  ngOnInit() {
    this.loggingService.logInfo("RecipeDetailComponent::ngOnInit() called");

    //Get data through Resolver
    this.activateRoute.data.subscribe((data: Data) => {
      this.loggingService.logInfo("RecipeDetailComponent::subscribe() \n data=");
      console.log(data);
      this.recipe = data['recipe'];
      console.log(this.recipe);
    });
  }

}
