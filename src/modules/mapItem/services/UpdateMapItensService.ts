import { IMapItensRepository } from "../repositories/IMapItensRepository";

class UpdateMapItensService {

  private mapItensRepository: IMapItensRepository;

  constructor(mapItensRepository: IMapItensRepository) {
    this.mapItensRepository = mapItensRepository;
  }
  async execute(id: number, name: string, imageURL: string): Promise<Boolean> {
      const MapItens = await this.mapItensRepository.updateById(id, {name, imageURL });

      return MapItens;
  }
}

export { UpdateMapItensService };
