import { Ingredient } from 'src/app/shared/ingredient.model';

import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  // ! Action interface only forces you to add a "type" property!
  // ! important: 'payload is not a name you have to use!'. The Action (type of action going to perform)
   readonly type = ADD_INGREDIENT; // ! it is ready only not able to change anywhere in the application;
   payload: Ingredient;
}
