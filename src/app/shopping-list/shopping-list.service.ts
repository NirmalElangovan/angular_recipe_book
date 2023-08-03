import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  // ingredientChanged = new EventEmitter<Ingredient[]>();
     ingredientChanged = new Subject<Ingredient[]>();
     editIndex = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          // this.ingredientChanged.emit(this.ingredients.slice());
          this.ingredientChanged.next(this.ingredients.slice());
          //   this.getIngredients();
      }
      addIngredients(ingredients: Ingredient[]) {
        // for (const ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());

      }
      getIngredient(index) {
        return this.ingredients[index];
      }
      updateIngredient(ingredient: Ingredient, index) {
        // this.ingredients[index].name = ingredient.name;
        // this.ingredients[index].amount = ingredient.amount;
        this.ingredients[index] = ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
      }
      onDeleteIngredients(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}
