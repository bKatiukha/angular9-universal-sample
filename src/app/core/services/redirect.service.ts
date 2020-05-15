import {Router} from '@angular/router';
import { TranslatesService } from '@shared/translates/translates.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RedirectService {
  constructor(
    private router: Router,
    private langService: TranslatesService
  ) { }
  private pathDictionary: RouteDictionary = {
    pl: {
      'auth': 'auth',
      'login': 'einloggen',
      'signup': 'anmelden',
      'start': 'anfang',
      'confirm': 'bestatigen',
      'form': 'formular',
      'change-password': 'passwort-andern',
      'sent': 'versandt',
      'reset': 'zurucksetzen',
      'email': 'email',
      'confirm-email': 'confirm-email',

      'profile': 'profil',
      'add-funds': 'geld-hinzufugen',
      'direct-bank-transfer': 'direkte-bankuberweisung',
      'withdraw-funds': 'geld-abheben',
      'invest': 'investieren',
      'confirmation': 'bestatigung',
      'early-exit': 'vorzeitige-ausfahrt',
      'portfolio': 'portfolio',
      'statistics': 'statistik',
      'transactions': 'transaktionen',
      'marketplace': 'marktplatz',
      'catalog': 'katalog',
      'shopping-cart': 'einkaufswagen',
      'user-verification': 'user-verification',
      'confirmation-email': 'confirmation-email',
      'user': 'benutzer',
      'personal-information': 'personal-information',
      'bank-accounts': 'bank-konten',
      'identification-documents': 'ausweisdokumente',
      'accounts': 'konten',
      'settings': 'einstellungen',
      'tax-report': 'tax-report',

      'info': 'info',
      'how-it-works': 'wie-es-funktioniert',
      'risk-management': 'risikomanagement',
      'about-us': 'uber-uns',
      'privacy-policy': 'datenschutzbestimmungen',
      'faq': 'faq',
      'terms-and-conditions': 'terms-and-conditions',
      'not-found': 'nicht-gefunden',
      'admin': 'admin',
      'content-manager': 'content-manager',

      'info-pages': 'info-pages',
      'best-p2p-investing': 'best-p2p-investing',
      'p2p-platform': 'p2p-platform',
      'p2p-rates': 'p2p-rates',
      'how-p2p-loans': 'how-p2p-loans',
      'how-p2p-investment': 'how-p2p-investment',
      'how-p2p-lending': 'how-p2p-lending',
      'p2p-strategies': 'p2p-strategies',
      'what-p2p-investment': 'what-p2p-investment',
      'what-p2p-lending': 'what-p2p-lending',
      'what-p2p-loans': 'what-p2p-loans'
    },
    en: {
      'auth': 'auth',
      'signup': 'register',
      'login': 'login',
      'start': 'start',
      'confirm': 'confirm',
      'form': 'form',
      'change-password': 'change-password',
      'sent': 'sent',
      'reset': 'reset',
      'email': 'email',
      'confirm-email': 'confirm-email',

      'profile': 'profile',
      'add-funds': 'add-funds',
      'direct-bank-transfer': 'direct-bank-transfer',
      'withdraw-funds': 'withdraw-funds',
      'invest': 'invest',
      'confirmation': 'confirmation',
      'early-exit': 'early-exit',
      'portfolio': 'portfolio',
      'statistics': 'statistics',
      'transactions': 'transactions',
      'marketplace': 'marketplace',
      'catalog': 'catalog',
      'shopping-cart': 'shopping-cart',
      'user-verification': 'user-verification',
      'confirmation-email': 'confirmation-email',
      'user': 'user',
      'personal-information': 'personal-information',
      'bank-accounts': 'bank-accounts',
      'identification-documents': 'identification-documents',
      'accounts': 'accounts',
      'settings': 'settings',
      'tax-report': 'tax-report',

      'info': 'info',
      'how-it-works': 'how-it-works',
      'risk-management': 'risk-management',
      'about-us': 'about-us',
      'privacy-policy': 'privacy-policy',
      'faq': 'faq',
      'terms-and-conditions': 'terms-and-conditions',
      'not-found': 'not-found',
      'admin': 'admin',
      'content-manager': 'content-manager',

      'info-pages': 'info-pages',
      'best-p2p-investing': 'best-p2p-investing',
      'p2p-platform': 'p2p-platform',
      'p2p-rates': 'p2p-rates',
      'how-p2p-loans': 'how-p2p-loans',
      'how-p2p-investment': 'how-p2p-investment',
      'how-p2p-lending': 'how-p2p-lending',
      'p2p-strategies': 'p2p-strategies',
      'what-p2p-investment': 'what-p2p-investment',
      'what-p2p-lending': 'what-p2p-lending',
      'what-p2p-loans': 'what-p2p-loans'
    },
    ua: {
      'auth': 'auth',
      'signup': 'register',
      'login': 'login',
      'start': 'start',
      'confirm': 'confirm',
      'form': 'form',
      'change-password': 'change-password',
      'sent': 'sent',
      'reset': 'reset',
      'email': 'email',
      'confirm-email': 'confirm-email',

      'profile': 'profile',
      'add-funds': 'add-funds',
      'direct-bank-transfer': 'direct-bank-transfer',
      'withdraw-funds': 'withdraw-funds',
      'invest': 'invest',
      'confirmation': 'confirmation',
      'early-exit': 'early-exit',
      'portfolio': 'portfolio',
      'statistics': 'statistics',
      'transactions': 'transactions',
      'marketplace': 'marketplace',
      'catalog': 'catalog',
      'shopping-cart': 'shopping-cart',
      'user-verification': 'user-verification',
      'confirmation-email': 'confirmation-email',
      'user': 'user',
      'personal-information': 'personal-information',
      'bank-accounts': 'bank-accounts',
      'identification-documents': 'identification-documents',
      'accounts': 'accounts',
      'settings': 'settings',
      'tax-report': 'tax-report',

      'info': 'info',
      'how-it-works': 'how-it-works',
      'risk-management': 'risk-management',
      'about-us': 'about-us',
      'privacy-policy': 'privacy-policy',
      'faq': 'faq',
      'terms-and-conditions': 'terms-and-conditions',
      'not-found': 'not-found',
      'admin': 'admin',
      'content-manager': 'content-manager',

      'info-pages': 'info-pages',
      'best-p2p-investing': 'best-p2p-investing',
      'p2p-platform': 'p2p-platform',
      'p2p-rates': 'p2p-rates',
      'how-p2p-loans': 'how-p2p-loans',
      'how-p2p-investment': 'how-p2p-investment',
      'how-p2p-lending': 'how-p2p-lending',
      'p2p-strategies': 'p2p-strategies',
      'what-p2p-investment': 'what-p2p-investment',
      'what-p2p-lending': 'what-p2p-lending',
      'what-p2p-loans': 'what-p2p-loans'
    }
  };

  public navigateTo(path: string) {
    if (path === '' || path === '/') {
      // console.log(this.langService.getCurrentLang());
      this.router.navigate(['/', this.langService.getCurrentLang()]);
      return;
    }
    const pathArray = path.split('/');
    this.router.navigate(this.getPath(pathArray));
  }
  public getPath(pathArray: string[]): string[] {
    const lang = this.langService.getCurrentLang();
    return [('/' + lang), ...this.getTranslatedPath(pathArray, lang)];
  }

  public getTranslatedPath(pathArray: string[], lang: string): string[] {
      return pathArray.map(key => {
        if (this.pathDictionary[lang][key]) {
          return this.pathDictionary[lang][key];
        }
        return key;
      });
  }
  public getKeyArrayFromRouteUrl(url: string) {
    const lang = this.langService.getCurrentLang();
    const pathArray = url.split('/');
    pathArray.splice(0, 2);
    return this.getKeyArrayFromRoute(pathArray, lang);
  }

  public getKeyArrayFromRoute(pathArray: string[], lang: string) {
    return pathArray.map(segment => {
      for (const key in this.pathDictionary[lang]) {
        if (this.pathDictionary[lang][key] === segment) {
          return key;
        }
      }
      console.log(segment);
      return segment;
    });
  }
  public getRouterLink(url: string) {
    // const path = this.getKeyArrayFromRouteUrl(url);
    // console.log(path);
    const lang = this.langService.getCurrentLang();
    // let resUrl: string = '/' + this.langService.getCurrentLang();
    const pathArray = url.split('/');
    // pathArray.splice(0, 1);
    const keysArray = this.getTranslatedPath(pathArray, lang);
    // console.log(keysArray);
    const keysStr = keysArray.join('/');
    // console.log(keysStr);
    // keysStr.slice(-1);
    // console.log(keysStr);
    // console.log(keysArray);
    // console.log(this.langService.getCurrentLang());
    return '/' + this.langService.getCurrentLang() + keysStr;
    // resUrl = resUrl + keysStr;
    // console.log(resultUrl);
   // pathArray.forEach(res => resultUrl + ...this.getTranslatedPath())

    // return '/' + lang + ...this.getTranslatedPath(pathArray, lang);
    // return '/' + this.langService.getCurrentLang();
  }

}

interface RouteDictionary {
  en: RouteKeys;
  pl: RouteKeys;
  ua: RouteKeys;
}

interface RouteKeys {
  ['auth'];
  ['login'];
  ['signup'];
  ['start'];
  ['confirm'];
  ['form'];
  ['change-password'];
  ['sent'];
  ['reset'];
  ['email'];
  ['confirm-email'];

  ['profile'];
  ['invest'];
  ['confirmation'];
  ['early-exit'];
  ['portfolio'];
  ['statistics'];
  ['transactions'];
  ['marketplace'];
  ['catalog'];
  ['shopping-cart'];
  ['add-funds'];
  ['direct-bank-transfer'];
  ['withdraw-funds'];
  ['user-verification'];
  ['confirmation-email'];
  ['user'];
  ['personal-information'];
  ['bank-accounts'];
  ['identification-documents'];
  ['accounts'];
  ['settings'];
  ['tax-report'];

  ['content-manager'];
  ['how-it-works'];
  ['risk-management'];
  ['about-us'];
  ['privacy-policy'];
  ['faq'];
  ['terms-and-conditions'];
  ['info'];
  ['not-found'];
  ['admin'];
  ['content-manager'];

  ['info-pages'];
  ['best-p2p-investing'];
  ['p2p-platform'];
  ['p2p-rates'];
  ['how-p2p-loans'];
  ['how-p2p-investment'];
  ['how-p2p-lending'];
  ['p2p-strategies'];
  ['what-p2p-investment'];
  ['what-p2p-lending'];
  ['what-p2p-loans'];
}
