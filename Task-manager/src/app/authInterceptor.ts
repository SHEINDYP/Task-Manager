import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {


    if (typeof localStorage !== 'undefined') {
        const tokenString = localStorage.getItem('user');

        if (tokenString != null) {
            console.log('🤦‍♀️', tokenString);
            const cloned = req.clone({
                setHeaders: {
                    authorization: `Bearer ${tokenString}`,
                },
            });

            return next(cloned);
        } else {
            console.log('😢');
            return next(req);
        }
    }
    else return next(req);
};