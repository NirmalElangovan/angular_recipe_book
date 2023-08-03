import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editMode = false;
  editItemIndex: number;
  toEditItem: Ingredient;
  @ViewChild('editShopping', { static: false}) editInputRef: NgForm;
//  @Output() added = new EventEmitter<{name: string, amount: number}>();
//  @Output() added = new EventEmitter<Ingredients>();

//  Ingredients
//  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;

//  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
 constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  this.shoppingListService.editIndex.subscribe(
    (index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.toEditItem = this.shoppingListService.getIngredient(index);
      this.editInputRef.setValue({
        name: this.toEditItem.name,
        amount: this.toEditItem.amount
      });

    }
  );
  }
  onClear() {
    this.editInputRef.reset();
    this.editMode = false;
  }
  onDelete() {
    this.onClear();
    this.shoppingListService.onDeleteIngredients(this.editItemIndex);
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(newIngredient, this.editItemIndex);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onClear();
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = +this.amountInputRef.nativeElement.value;

    // const newIngredient = new Ingredient(name, amount);
    // //this.added.emit(newIngredient);

  }

}
