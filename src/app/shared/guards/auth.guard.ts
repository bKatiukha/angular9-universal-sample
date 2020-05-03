import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private auth: AuthService) {
  }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/ru', 'auth', 'login'])
        .then(() => {
          this.auth.interruptedUrl = state.url;
          // TODO: If Notification (toast) service is present we can show warning message
        });
    }
    return this.auth.isAuthenticated();
  }
}
