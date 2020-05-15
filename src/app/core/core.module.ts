import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreService} from './services/core.service';
import {RedirectService} from './services/redirect.service';
import {NavigationService} from './services/navigation.service';
import {LinkService} from './services/link.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CoreService,
    RedirectService,
    NavigationService,
    LinkService
  ]
})
export class CoreModule { }
