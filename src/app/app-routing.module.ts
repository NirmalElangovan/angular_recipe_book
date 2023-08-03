import { AuthComponet } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRouting: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    // ! we need to restart the code whenever lazyload is implemented
  { path:'recipes', loadChildren: './recipes/recipe.module#RecipeModule'}, // lazyload type 1
  // { path:'recipes', loadChildren: './recipes/recipe.module'}, // lazyload type 2
  // {
  //   path: 'recipes', loadChildren: () => import('./recipes/recipe.module') // lazyload type 3
  //     .then(x => x.RecipeModule)
  // },

  {
    path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },


    { path: '**', component: ErrorPageComponent, data: { message: 'Page Not Found'}},

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouting,{ preloadingStrategy: PreloadAllModules})
        // ! the preloadingStrategy load all the module before the needed so the application
         // ! more fater it download all the module after the application loaded
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
