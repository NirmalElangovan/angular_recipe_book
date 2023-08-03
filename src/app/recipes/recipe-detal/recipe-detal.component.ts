import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detal.component.html',
  styleUrls: ['./recipe-detal.component.css']
})
export class RecipeDetalComponent implements OnInit {
 SelectedDtails: any;
  id: number;

  constructor( private recipeService: RecipeService,
               private route: ActivatedRoute,
               private router: Router
              ) { }

  ngOnInit() {

    /* 1. The router snapshot will work for component loaded at first time  */
    /* 2. it means it work at when loaded newly at first in DOM not able to get the params when reuse the component*/
    /* 3. so we are using a Observables and subscribe method  for component reuse*/

    // option 1
    // const id = this.route.snapshot.params.id;

    // option 2
    this.route.params.subscribe(
      (params: Params ) => {
        const id = + params.id;
        this.id = + params.id;
        this.SelectedDtails = this.recipeService.getRecipe(id);
      }
    );
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.SelectedDtails.ingredients);
  }
  onDelete() {
     this.recipeService.deleteRecipe(this.id);
     this.router.navigate(['../'], { relativeTo: this.route});
  }
}
