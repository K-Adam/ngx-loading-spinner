import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { NgxLoadingSpinnerService } from './ngx-loading-spinner.service';


@Component({
  selector: 'ngx-loading-spinner',
  templateUrl: './ngx-loading-spinner.component.html',
  styleUrls: ['./ngx-loading-spinner.component.css']
})
export class NgxLoadingSpinnerComponent implements OnInit {

  @Input() set timeout(v: number) {
    this.service.timeout = v;
  }

  @Input() set threshold(v: number) {
    this.service.threshold = v;
  }

  @Input() zIndex: number = 100;

  @Input() loadingText ?: string;

  @Input() template ?: string;

  visible: boolean = false;

  constructor(
    private service: NgxLoadingSpinnerService
  ) { }

  ngOnInit() {
    this.subscribeToService();
  }

  private subscribeToService() {
    this.service.visibleSubject.subscribe(spinnerVisible => {
      this.visible = spinnerVisible;
    });
  }

}
