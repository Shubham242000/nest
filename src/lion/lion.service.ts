import { Injectable } from '@nestjs/common';

@Injectable()
export class LionService {
    lionSound() {
        return `roarrr`
    }
}
