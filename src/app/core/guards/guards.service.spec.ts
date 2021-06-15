import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GuardsService } from './guards.service';

describe('GuardsService', () => {
  let service: GuardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(GuardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
