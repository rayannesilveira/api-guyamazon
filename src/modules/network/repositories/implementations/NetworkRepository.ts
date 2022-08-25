import { type } from "os";
import { Repository } from "typeorm/repository/Repository";
import { AppDataSource } from "../../../../data-source";
import { Network } from "../../../../entity/Network";
import { TypeData } from "../../../../entity/TypeData";
import { INetworkRepository } from "../INetworkRepository";


class NetworkRepository implements INetworkRepository {
  private repository: Repository<Network>;
  private typeDataRepository: Repository<TypeData>;


  constructor() {
    this.repository = AppDataSource.getRepository(Network);
    this.typeDataRepository = AppDataSource.getRepository(TypeData);
  }

  async addTypes(id: number, types: number[]): Promise<Network> {
    const network = await this.repository.findOne({ where: { id: id } });
    const typesObjects = [];
    for (let i = 0; i < types.length; i++) {
      var type = await this.typeDataRepository.findOne({ where: { id: id } });
      typesObjects.push(type);
    }


    for (let i = 0; i < types.length; i++) {
      const index = network.typesData.findIndex(x => x.id == typesObjects[i].id);

      if (index == -1) {
        network.typesData.push(typesObjects[i]);
      }
    }

    await this.repository.save(network);

    return network;

  }


  async addType(id: number, typeId: number): Promise<Boolean> {
    const network = await this.repository.findOne({ where: { id: id } });

    const type = await this.typeDataRepository.findOne({ where: { id: typeId } });

    const index = network.typesData.findIndex(x => x.id == typeId);

    if (index == -1) {
      network.typesData.push(type);
      await this.repository.save(network);

      return true;
    }
    else {
      return false;
    }



  }


  async getAll(): Promise<Network[]> {
    const networks = await this.repository.find({});

    return networks;
  }

  async create({ name, description, created_at }: ICreateNetworkDTO): Promise<Boolean> {
    const network = this.repository.create({
      name, description, created_at
    });

    await this.repository.save(network);

    const wasCreated = await this.repository.findOneBy({ name: name, created_at: created_at });

    if (wasCreated) {
      return true;
    }

    return false;
  }


  async findById(id: number): Promise<Network> {
    const network = await this.repository.findOneBy({ id: id });

    return network;
  }

}

export { NetworkRepository };
