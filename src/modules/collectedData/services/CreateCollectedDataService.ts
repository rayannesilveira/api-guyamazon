import { ICollectedDataRepository } from "../repositories/ICollectedDataRepository";

interface IRequest {
  value: string;
  typeDataId: number;
  nodeId: number;
  typeDataName: string;
}

class CreateCollectedDataService {
  private CollectedDataRepository: ICollectedDataRepository;

  constructor(CollectedDataRepository: ICollectedDataRepository) {
    this.CollectedDataRepository = CollectedDataRepository;
  }

  async execute(data: IRequest[]): Promise<boolean>{
    

    await this.CollectedDataRepository.create(data);
    return true;

  }
}

export { CreateCollectedDataService };
