import { CollectedData } from "../../../entity/CollectedData";


interface ICollectedDataRepository{

  create(data: ICreateCollectedDataDTO[]): Promise<void>;
  getAllData(): Promise<CollectedData[]>;
  getLastData(): Promise<CollectedData>;
}

export { ICollectedDataRepository };
