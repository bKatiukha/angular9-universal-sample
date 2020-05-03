import { ModuleWithProviders, NgModule } from '@angular/core';

import { TransferHttpModule } from '@gorniv/ngx-universal';

import { LayoutsModule } from './layouts/layouts.module';
import { SharedMetaModule } from './shared-meta';
import { SharedFormsModule } from '@shared/shared-forms/shared-forms.module';
import {LangGuard} from '@shared/guards/lang-guard.service';

@NgModule({
  exports: [LayoutsModule, SharedMetaModule, TransferHttpModule],
  providers: [LangGuard],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return { ngModule: SharedModule };
  }
}
