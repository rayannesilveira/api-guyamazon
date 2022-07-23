import { IMapItensRepository } from "../repositories/IMapItensRepository";

class DeleteMapItensService {

  private mapItensRepository: IMapItensRepository;

  constructor(mapItensRepository: IMapItensRepository) {
    this.mapItensRepository = mapItensRepository;
  }
  async execute(id: number): Promise<Boolean> {
      const wasDeleted = await this.mapItensRepository.deleteById(id);
      return wasDeleted;
  }
}

export { DeleteMapItensService };
