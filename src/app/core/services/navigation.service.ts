import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UniversalStorage} from '@shared/storage/universal.storage';
import {RedirectService} from './redirect.service';

@Injectable()
export class NavigationService {
  constructor(
    private router: Router,
    private redirectService: RedirectService,
    @Inject(UniversalStorage) private _appStorage: Storage
  ) {}

  goToLoginWithEmail(email) {
    if (email) { this._appStorage.setItem('registrationEmail', email); }
    this.navigate('auth/login');
  }
  goToInvest(options?) {this.navigate('profile/invest', options); }
  goToLogin(options?) {this.navigate('auth/login', options); }
  goToSignUp(options?) {this.navigate('auth/signup', options); }
  goToMarketplace(options?) {this.navigate('profile/marketplace/catalog', options); }
  goToEmail(options?) {this.navigate('auth/email', options); }
  goToUser(options?) {this.navigate('profile/user/info', options); }
  goToProfile(options?) {this.navigate('profile', options); }
  goToMain(options?) {this.navigate('', options); }
  navigate(url, options?) {
    console.log('Navigate', url, options);
    if (options) {
      const routePath = typeof url === 'string' ? url.split('/') : url;
      console.log(this.redirectService.getPath(routePath), options);
      this.router.navigate(this.redirectService.getPath(routePath), options);
    } else {
      this.redirectService.navigateTo(url);
    }
  }
}
