import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxLoadingSpinnerComponent } from './ngx-loading-spinner.component';
import { NgxLoadingSpinnerService } from './ngx-loading-spinner.service';

@NgModule({
  declarations: [NgxLoadingSpinnerComponent],
  imports: [
  ],
  exports: [NgxLoadingSpinnerComponent]
})
export class NgxLoadingSpinnerModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: NgxLoadingSpinnerModule,
        providers: [NgxLoadingSpinnerService]
      };
    }
}
