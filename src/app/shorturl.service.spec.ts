import { TestBed } from '@angular/core/testing';

import { ShorturlService } from './shorturl.service';

describe('ShorturlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShorturlService = TestBed.get(ShorturlService);
    expect(service).toBeTruthy();
  });
});
