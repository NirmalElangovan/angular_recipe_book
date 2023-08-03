import { AuthService } from './auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class  AuthInterceptorService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return this.authService.user.pipe(take(1), exhaustMap(( user =>{
      // ! if user not return the request (during login user not available if try to get user._token we get error)
      if(!user){
        return next.handle(req);
      }
      // req.clone mehod is used modify the request
      const modifiedRequest = req.clone({params: new HttpParams().set('auth', user._token)})
      return next.handle(modifiedRequest)
    }
    )))
  }
}
