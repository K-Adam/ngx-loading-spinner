import { Component, OnInit } from '@angular/core';

// Import from '@k-adam/ngx-loading-spinner' in your project
import { NgxLoadingSpinnerService } from 'ngx-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showLoaderTime: number = 3000;

  timeoutParameter: number = 10000;
  zIndex: number = 100;

  constructor(private spinner: NgxLoadingSpinnerService) {}

  ngOnInit() {}

  showLoader() {
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    }, this.showLoaderTime);
  }
}
