import { TestBed, inject } from '@angular/core/testing';

import { RecipeDetailsResolverService } from './recipe-details-resolver.service';

describe('RecipeDetailsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeDetailsResolverService]
    });
  });

  it('should be created', inject([RecipeDetailsResolverService], (service: RecipeDetailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
