import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    // AuthComponet,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RecipeModule, // ! it was removed because it was loaded in lazyload
    // ShoppingListModule, // ! it was removed because it was loaded in lazyload
    SharedModule,
    // AuthModule,
    AppRoutingModule,
    CoreModule // * provided and service are moved to core module
  ],
  // // provide maintain one service instance for all the time still app running
  // * below code are moved to app core module
  // providers: [ShoppingListService, RecipeService, AuthService,{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptorService,
  //   multi: true // By enable as true we allow to use multiple interceptor even we use one for now
  // }],
  // entryComponents:[AlertComponent], //  ! below angular 9 we need entry componts above to it we can omit it
  bootstrap: [AppComponent]
})
export class AppModule { }
