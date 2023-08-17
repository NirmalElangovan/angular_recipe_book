import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscriber, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  shoppingListServiceUnsubscribe: Subscription;
  // ingredients: Ingredient[] = [

  //   new Ingredient('apple', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];
  constructor( private shoppingListService: ShoppingListService, private loggingService: LoggingService) {  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListServiceUnsubscribe = this.shoppingListService.ingredientChanged.subscribe(( ingredent1) => {
      this.ingredients  = ingredent1;
    });
    this.loggingService.printLog('Hello from shopping  list component ngOnInit()')
  }
  // onIngredientAdded(data: Ingredient) {
  //   this.ingredients.push(data);

  // }
  onEditItem(item, index: number) {
    this.shoppingListService.editIndex.next(index);
  }
  ngOnDestroy() {
    this.shoppingListServiceUnsubscribe.unsubscribe();
  }
}
