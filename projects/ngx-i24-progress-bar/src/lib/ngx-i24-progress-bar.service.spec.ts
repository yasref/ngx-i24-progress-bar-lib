import { TestBed } from '@angular/core/testing';

import { NgxI24ProgressBarService } from './ngx-i24-progress-bar.service';

describe('NgxI24ProgressBarService', () => {
  let service: NgxI24ProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxI24ProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
