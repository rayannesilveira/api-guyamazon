import { Network } from "../../../entity/Network";
import { INetworkRepository } from "../repositories/INetworkRepository";

class GetAllNetworkService{
  private networkRepository: INetworkRepository;

  constructor(networkRepository: INetworkRepository){
    this.networkRepository = networkRepository;
  }
  async execute(): Promise<Network[]> {
    const network = await this.networkRepository.getAll();

    return network;
  }
}

export { GetAllNetworkService};
