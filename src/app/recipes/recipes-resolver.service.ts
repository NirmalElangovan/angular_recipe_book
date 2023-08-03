import { RecipeService } from './recipe.service';
import { DataStorageService } from './../shared/data-storage-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';

// it is used to fix the problem when page gets refresh
// we losed the recipe data so we check recipe data is available else fetch it
@Injectable({ providedIn: 'root'})
export class RecipesResolverService implements Resolve <Recipe[]>{
  constructor(private DataStorageService: DataStorageService,
    private recipeService: RecipeService
    ){}
  // * no need to .subscribe() the fetchRecipies method the 'resolve' angular feature
  // will subscribe for us once the data is there
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.recipeService.getRecipes()
    if(recipes.length === 0 ){
    return this.DataStorageService.fetchRecipies();
    } else {

    }
  }
}
