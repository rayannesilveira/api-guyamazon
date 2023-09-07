import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { CollectedData } from "../../../../entity/CollectedData";
import { ICollectedDataRepository } from "../ICollectedDataRepository";
import { TypeData } from "../../../../entity/TypeData";


class CollectedDataRepository implements ICollectedDataRepository {
  private repository: Repository<CollectedData>;
  private repositoryType: Repository<TypeData>;

  constructor() {
    this.repository = AppDataSource.getRepository(CollectedData);
    this.repositoryType = AppDataSource.getRepository(TypeData);
  }


  async create(data: ICreateCollectedDataDTO[]): Promise<void> {
    data.forEach(async (x, i) => {
      const type = await this.repositoryType.findOneBy({ id: x.typeDataId });

      const CollectedData = this.repository.create({
        value: x.value,
        typeDataId: x.typeDataId,
        nodeId: x.nodeId,
        typeDataName: type.name,
        created_at: new Date().toISOString()
      });

      await this.repository.save(CollectedData);
    });


  }

  async getAllData(): Promise<CollectedData[]> {

    const data = await this.repository.find({});

    return data;

  }

  async getLastData(): Promise<CollectedData> {

    const data = await this.repository.find({});
    var newData = [];
    var tempA, tempB, hum = 0;

    while (data.length != 0) {
      const value = data.pop();
      if (value.typeDataName == 'Temperatura A' && tempA == 0) {
        newData.push(value);
        console.log("A");
        tempA = 1;
      }

      if (value.typeDataName == 'Temperatura B' && tempB == 0) {
        newData.push(value);
        console.log("B");
        tempB = 1;
      }
      if (value.typeDataName == 'Umidade' && hum == 0) {
        newData.push(value);
        console.log("C");
        hum = 1;

      }

    }

    console.log(newData);
    return newData.pop();

  }
}

export { CollectedDataRepository };
