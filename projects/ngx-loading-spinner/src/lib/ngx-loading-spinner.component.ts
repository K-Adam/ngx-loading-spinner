import { Component, OnInit, Input } from '@angular/core';

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

  @Input() zIndex: number = 100;

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
