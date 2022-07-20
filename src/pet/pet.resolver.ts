import { Resolver, Query } from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { PetsService } from './pet.service';

@Resolver((of) => Pet)
export class PetResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }
}
