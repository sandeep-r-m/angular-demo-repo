import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailsResolverService } from '../services/recipe-details-resolver.service';
import { HomeComponent } from '../home/home.component';
import { NewRecipeComponent } from '../recipes/new-recipe/new-recipe.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "recipes",
        component: RecipesComponent,
        children: [
            {
                path: "new",
                component: NewRecipeComponent
            },
            {
                path: ":id",
                component: RecipeDetailComponent,
                resolve: { recipe: RecipeDetailsResolverService }
            },
            {
                path: ":id/edit",
                component: RecipeEditComponent
            }
        ]
    },
    { path: "shopping-list", component: ShoppingListComponent },
    { path: "**", component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule { }
