import { ISpecialAbilitiesRepository } from "../repositories/ISpecialAbilitiesRepository";

class DeleteSpecialAbilitiesService {

  private specialAbilitiesRepository: ISpecialAbilitiesRepository;

  constructor(specialAbilitiesRepository: ISpecialAbilitiesRepository) {
    this.specialAbilitiesRepository = specialAbilitiesRepository;
  }
  async execute(id: number): Promise<Boolean> {
      const wasDeleted = await this.specialAbilitiesRepository.deleteById(id);
      return wasDeleted;
  }
}

export { DeleteSpecialAbilitiesService };
