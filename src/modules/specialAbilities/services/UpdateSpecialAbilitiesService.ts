import { ISpecialAbilitiesRepository } from "../repositories/ISpecialAbilitiesRepository";

class UpdateSpecialAbilitiesService {

  private specialAbilitiesRepository: ISpecialAbilitiesRepository;

  constructor(specialAbilitiesRepository: ISpecialAbilitiesRepository) {
    this.specialAbilitiesRepository = specialAbilitiesRepository;
  }
  async execute(id: number, { name, description, key, videoURL}: ICreateSpecialAbilityDTO): Promise<Boolean> {
      const specialAbilities = await this.specialAbilitiesRepository.updateById(id, { name, description, key, videoURL});

      return specialAbilities;
  }
}

export { UpdateSpecialAbilitiesService };
