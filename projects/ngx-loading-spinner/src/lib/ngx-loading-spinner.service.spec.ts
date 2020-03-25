import { TestBed } from '@angular/core/testing';

import { NgxLoadingSpinnerService } from './ngx-loading-spinner.service';

describe('NgxLoadingSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLoadingSpinnerService = TestBed.get(NgxLoadingSpinnerService);
    expect(service).toBeTruthy();
  });
});
