import { TestBed, inject } from '@angular/core/testing';

import { InAndOutDishesService } from './in-and-out-dishes.service';

describe('InAndOutDishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InAndOutDishesService]
    });
  });

  it('should be created', inject([InAndOutDishesService], (service: InAndOutDishesService) => {
    expect(service).toBeTruthy();
  }));
});
