import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { CollectedData } from "../../../../entity/CollectedData";
import { ICollectedDataRepository } from "../ICollectedDataRepository";


class CollectedDataRepository implements ICollectedDataRepository{
  private repository: Repository<CollectedData>;

  constructor() {
    this.repository = AppDataSource.getRepository(CollectedData);
  }
  

  async create(data: ICreateCollectedDataDTO[]): Promise<void> {

    data.forEach(async (x, i)=>{
      const CollectedData = this.repository.create({
       value: x.value, 
       typeDataId: x.typeDataId,
       nodeId: x.nodeId,
       created_at: new Date().toISOString()
      });
  
      await this.repository.save(CollectedData);
    });
    

  }
  
 
}

export {CollectedDataRepository };
