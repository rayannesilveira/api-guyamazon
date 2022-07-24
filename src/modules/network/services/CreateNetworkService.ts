import { INetworkRepository } from "../repositories/INetworkRepository";

class CreateNetworkService {

  private networksRepository: INetworkRepository;

  constructor(networksRepository: INetworkRepository) {
    this.networksRepository = networksRepository;
  }

  async execute({name,  description, created_at }: ICreateNetworkDTO): Promise<Boolean> {

    const wasCreated = await this.networksRepository.create({
      name,  description, created_at
    });
    return wasCreated;
  }
}

export { CreateNetworkService };
