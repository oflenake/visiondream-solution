import { TestBed } from '@angular/core/testing';

import { VisiondreamLibraryService } from './visiondream-library.service';

describe('VisiondreamLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisiondreamLibraryService = TestBed.get(VisiondreamLibraryService);
    expect(service).toBeTruthy();
  });
});
