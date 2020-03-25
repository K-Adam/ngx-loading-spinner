import { Component, OnInit, ElementRef } from '@angular/core';

// Import from '@k-adam/ngx-loading-spinner' in your project
import { NgxLoadingSpinnerService } from 'ngx-loading-spinner';

enum TemplateType {None='NONE',String='STRING'};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showLoaderTime: number = 3000;

  timeoutParameter: number = 10000;
  thresholdParameter: number = 500;
  zIndexParameter: number = 100;
  loadingTextParameter ?: string;

  templateType: TemplateType = TemplateType.None;
  templateTextParameter: string = "This is an <strong>Example</strong>";

  constructor(private spinner: NgxLoadingSpinnerService) {}

  ngOnInit() {}

  showLoader() {
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    }, this.showLoaderTime);
  }
}
