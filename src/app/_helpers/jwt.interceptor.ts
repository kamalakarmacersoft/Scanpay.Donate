import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

        request = request.clone({ headers: request.headers.set('x-api-key', 'Jp4pMZx6d75KpL83Wh0ic8jchQwKJR293jwz6x84') });
        request = request.clone({ headers: request.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') });
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });

        return next.handle(request);
    }
}