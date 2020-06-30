import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { NgxLoadingSpinnerComponent } from './ngx-loading-spinner.component';
import { NgxLoadingSpinnerService } from './ngx-loading-spinner.service';

@NgModule({
  declarations: [NgxLoadingSpinnerComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgxLoadingSpinnerComponent]
})
export class NgxLoadingSpinnerModule {
    static forRoot(): ModuleWithProviders<NgxLoadingSpinnerModule> {
      return {
        ngModule: NgxLoadingSpinnerModule,
        providers: [NgxLoadingSpinnerService]
      };
    }
}
