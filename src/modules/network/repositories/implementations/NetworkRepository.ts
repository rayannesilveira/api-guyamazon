import { Repository } from "typeorm/repository/Repository";
import { AppDataSource } from "../../../../data-source";
import { Network } from "../../../../entity/Network";
import { INetworkRepository } from "../INetworkRepository";


class NetworkRepository implements INetworkRepository{
  private repository: Repository<Network>;

  constructor() {
    this.repository = AppDataSource.getRepository(Network);
  }

  async getAll(): Promise<Network[]> {
    const networks = await this.repository.find({});

    return networks;
  }

  async create({ name,description, created_at}: ICreateNetworkDTO): Promise<Boolean> {
    const network = this.repository.create({
      name, description, created_at
    });

    await this.repository.save(network);

    const wasCreated = await this.repository.findOneBy({ name: name, created_at: created_at});

    if(wasCreated){
      return true;
    }
    
    return false;
  }

  
  async findById(id: number): Promise<Network> {
    const network = await this.repository.findOneBy({ id: id});
   
    return network;
  }

}

export { NetworkRepository };
