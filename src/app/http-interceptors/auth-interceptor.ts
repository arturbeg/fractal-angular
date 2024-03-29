import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private authService:AuthService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
	
		const authReq = req.clone({
			headers: req.headers.append('Authorization', 'JWT ' + localStorage.getItem('token'))
		})

		return next.handle(authReq)

	}
}