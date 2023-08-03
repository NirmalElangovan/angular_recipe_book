import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeDetalComponent } from './recipe-detal/recipe-detal.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
@NgModule({
  declarations:[
    RecipesComponent,
    RecipeListComponent,
    RecipeDetalComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports:[
    // RouterModule,
    // CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  providers:[],
  exports:[
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetalComponent,
    // RecipeItemComponent,
    // RecipeStartComponent,
    // RecipeEditComponent,
  ]
})

export class RecipeModule {

}
