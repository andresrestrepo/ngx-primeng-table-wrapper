import { TestBed } from '@angular/core/testing';

import { NgxPrimengTableWrapperService } from './ngx-primeng-table-wrapper.service';

describe('NgxPrimengTableWrapperService', () => {
  let service: NgxPrimengTableWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPrimengTableWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
