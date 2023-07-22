/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CullinanService } from './cullinan.service';

describe('Service: Cullinan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CullinanService]
    });
  });

  it('should ...', inject([CullinanService], (service: CullinanService) => {
    expect(service).toBeTruthy();
  }));
});
