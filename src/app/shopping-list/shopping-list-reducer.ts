import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

const initialState = {
  ingredients:  [
    new Ingredient('apple', 5),
    new Ingredient('Tomatoes', 10),
  ]
};
// (state = initialState) it means set default value to the parameter if it Nulll or undefined
// * Reducer contains two parameter STATE, ACTION
// * :Action is a interface
export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    // * best practice to use upper_case;
     // ! state.ingredients.push  ==>  it is totally wrong we don`t edit the existing state or previous state
     // ! always copy the old state
    case 'ADD_INGREDIENT':
    return {
        ...state,
        ingredients: [...state.ingredients, action]
    };
  }
}
