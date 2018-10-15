import { TestBed, inject } from '@angular/core/testing';

import { ServerDataResolverService } from './server-data-resolver.service';

describe('ServerDataResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerDataResolverService]
    });
  });

  it('should be created', inject([ServerDataResolverService], (service: ServerDataResolverService) => {
    expect(service).toBeTruthy();
  }));
});
