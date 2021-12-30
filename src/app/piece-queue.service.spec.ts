import { TestBed } from '@angular/core/testing';

import { PieceQueueService } from './piece-queue.service';

describe('PieceQueueService', () => {
  let service: PieceQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
