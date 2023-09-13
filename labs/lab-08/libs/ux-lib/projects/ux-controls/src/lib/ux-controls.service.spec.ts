import { TestBed } from '@angular/core/testing';

import { UxControlsService } from './ux-controls.service';

describe('UxControlsService', () => {
  let service: UxControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UxControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
