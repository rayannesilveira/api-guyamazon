import { CollectedData } from "../../../entity/CollectedData";
import { ICollectedDataRepository } from "../repositories/ICollectedDataRepository";



class GetAllCollectedDataService {
  private CollectedDataRepository: ICollectedDataRepository;

  constructor(CollectedDataRepository: ICollectedDataRepository) {
    this.CollectedDataRepository = CollectedDataRepository;
  }

  async execute(): Promise<CollectedData[]>{
    const data = await this.CollectedDataRepository.getAllData();
    return data;

  }
}

export { GetAllCollectedDataService };
