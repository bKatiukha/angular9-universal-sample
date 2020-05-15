import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TranslatesService, ILang } from '@shared/translates';
import {Router} from '@angular/router';
import {RedirectService} from '../../../core/services/redirect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public langList$: Observable<ILang[]>;
  public currentLang: string;

  constructor(
    private _translatesService: TranslatesService,
    private router: Router,
    public redirectService: RedirectService
  ) {}

  ngOnInit(): void {
    this.langList$ = this._translatesService.getLangList();
    this.currentLang = this._translatesService.getCurrentLang();
  }

  public changeLang(code: string): void {
    const queryParams = this.router.parseUrl(this.router.url).queryParams;
    const path = this.router.url.split('?')[0];
    const keyPath = this.redirectService.getKeyArrayFromRouteUrl(path);
    this._translatesService.changeLang(code);
    this.currentLang = this._translatesService.getCurrentLang();
    const translatedPath = this.redirectService.getPath(keyPath);
    this.router.navigate(translatedPath);
  }
}
