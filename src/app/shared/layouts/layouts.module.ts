import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [FooterComponent, SidebarComponent, HeaderComponent, WrapperComponent],
  exports: [FooterComponent, SidebarComponent, HeaderComponent, WrapperComponent],
})
export class LayoutsModule {}
