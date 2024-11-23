import { TestBed, async, inject } from '@angular/core/testing';

import { ConfigGuard } from './config.guard';

describe('ConfigGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigGuard]
    });
  });

  it('should ...', inject([ConfigGuard], (guard: ConfigGuard) => {
    expect(guard).toBeTruthy();
  }));
});
