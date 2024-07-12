import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LOGGEDIN_ROOT } from '../configs/tokens';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


    const currentUser = authService.currentUser.type;

    switch (currentUser) {
      case 'master':
        if(state.url.startsWith('/home/master')){
          router.navigate(['home/master'])
          return false
        } else {
          return true
        }
        break;
      case 'player':
        if(state.url.startsWith('/home/player')){
          router.navigate(['home/player'])
          return false
        } else {
          return true
        }
        break;
      default:
        router.navigate(['/']);
        return false;
    }
  }


export const unauthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn
    ? router.navigate([inject(LOGGEDIN_ROOT)])
    : true;
};
