import { INodeRepository } from "../repositories/INodeRepository";


class CreateNodeService {
  private nodeRepository: INodeRepository;

  constructor(nodeRepository: INodeRepository) {
    this.nodeRepository = nodeRepository;
  }

  async execute({ name, latitude,
    longitude,
    description,
    created_at,
    networkId  }: ICreateNodeDTO): Promise<Boolean> {
    const wasCreated = await this.nodeRepository.create({
      name, latitude,
      longitude,
      description,
      created_at,
      networkId 
    });


    return wasCreated;

  }
}

export { CreateNodeService };
