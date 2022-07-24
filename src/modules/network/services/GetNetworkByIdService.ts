import { Network } from "../../../entity/Network";
import { INetworkRepository } from "../repositories/INetworkRepository";

class GetNetworkByIdService {

  private networkRepository: INetworkRepository;

  constructor(networkRepository: INetworkRepository){
    this.networkRepository = networkRepository;
  }
  async execute({ id }): Promise<Network> {
    const network = await this.networkRepository.findById(id);

    return network;
  }
}

export { GetNetworkByIdService };
