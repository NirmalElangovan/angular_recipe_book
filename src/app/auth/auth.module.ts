import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponet } from './auth.component';

@NgModule({
  declarations:[AuthComponet],
  imports:[
    SharedModule,
    RouterModule.forChild([{ path: '', component: AuthComponet}])]
})
export class AuthModule{

}
