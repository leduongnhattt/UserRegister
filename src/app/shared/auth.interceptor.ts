import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    const cloneRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer' + authService.getToken())
    });

    return next(cloneRequest)
  }
  else {
    
  }
  return next(req);
};
