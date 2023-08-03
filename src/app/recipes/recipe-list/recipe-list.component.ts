import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [];
  unSubscribe: Subscription;

  /** moved the recipes to recipe service  */
  // recipes: Recipe [] = [
  //   new Recipe('test', 'this is test',
  //   'https://media1.thehungryjpeg.com/thumbs2/ori_3684573_u7fzfscx2tbxabtsapspty398dqj1mv1nztuhldq_df-monogram-logo-design.jpg'),

  //   new Recipe('second test', 'this is test',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT402b_q0sAoXHY50z4R_yQsTDYoOVZs-pIiw&usqp=CAU')
  // ];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.unSubscribe = this.recipeService.recipeChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.unSubscribe.unsubscribe();
  }
}
