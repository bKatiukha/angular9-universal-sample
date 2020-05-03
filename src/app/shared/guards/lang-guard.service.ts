import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import { TranslatesService } from '@shared/translates';

@Injectable()
export class LangGuard implements CanActivate {
  constructor(private langService: TranslatesService) {}

  canActivate(route, state) {
    if (route.data.lang === 'en') {
      this.langService.changeLang('en');
    }
    if (route.data.lang === 'ru') {
      this.langService.changeLang('ru');
    }
    return true;
  }
}
