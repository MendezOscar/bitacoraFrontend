import { TestBed } from '@angular/core/testing';

import { BitacoryService } from './bitacory.service';

describe('BitacoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitacoryService = TestBed.get(BitacoryService);
    expect(service).toBeTruthy();
  });
});
