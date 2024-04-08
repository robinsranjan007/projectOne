import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

 export class AuthInterceptorService implements HttpInterceptor{
     intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        
         
        //  const modifiedreq= req.clone({headers:req.headers.set('auth-token','robins is great')})
    
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event.type === HttpEventType.Response) {
                  console.log('response has arrived', event.body);
                }
            })
        )

     }

// we can use the interceptor for loading

    
 }