import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';

const routers: Routes = [
  { path: '', component: ShoppingListComponent },
]
@NgModule({
imports:[RouterModule.forChild(routers)],
exports: [RouterModule]
})
export class ShoppingListRoutingModule{

}
