import { Test, TestingModule } from '@nestjs/testing';
import { LionService } from './lion.service.js';

describe('LionService', () => {
  let service: LionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LionService],
    }).compile();

    service = module.get<LionService>(LionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
