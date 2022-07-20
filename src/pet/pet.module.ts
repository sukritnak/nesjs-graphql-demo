import { Module } from '@nestjs/common';
import { PetsService } from './pet.service';
import { PetResolver } from './pet.resolver';

@Module({
  providers: [PetsService, PetResolver],
})
export class PetModule {}
