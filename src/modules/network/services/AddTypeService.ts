import { INetworkRepository } from "../repositories/INetworkRepository";

class AddTypeService {

  private networkRepository: INetworkRepository;

  constructor(networkRepository: INetworkRepository) {
    this.networkRepository = networkRepository;
  }
  
  async execute({ id, idType }): Promise<Boolean> {
    const networkExists = await this.networkRepository.findById(id);

    if(!networkExists){
      return false;
    }
    
    const success = await this.networkRepository.addType(id, idType);

    return success;
  }
}

export { AddTypeService };
