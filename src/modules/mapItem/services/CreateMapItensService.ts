import { IMapItensRepository } from "../repositories/IMapItensRepository";

class CreateMapItensService {

  private mapItemRepository: IMapItensRepository;

  constructor(mapItemRepository: IMapItensRepository) {
    this.mapItemRepository = mapItemRepository;
  }
  async execute(name: string, imageURL: string): Promise<Boolean> {
    const mapItemAlreadyExists = await this.mapItemRepository.findByName(name);

    if(mapItemAlreadyExists){
      return false;
    }else{
      await this.mapItemRepository.create({name, imageURL});

      return true;
    }
  }
}

export { CreateMapItensService };
