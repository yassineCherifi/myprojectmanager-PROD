import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';





@Injectable()
export class AuthInterceptor implements HttpInterceptor  {

    constructor(private userService: UserService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
            withCredentials: true
        });
        return  next.handle(req).pipe(tap(
                event => { },
                err => {
                    if (err.error.auth === false) {
                        this.router.navigateByUrl('/login');
                    }
                }
            )
            );
        }
    }
