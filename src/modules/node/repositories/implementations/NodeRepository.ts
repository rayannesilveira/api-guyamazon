import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { Node } from "../../../../entity/Node";
import { INodeRepository } from "../INodeRepository";



class NodeRepository implements INodeRepository {
  private repository: Repository<Node>;

  constructor() {
    this.repository = AppDataSource.getRepository(Node);
  }

  async update(id: number, { name, latitude,
    longitude,
    description,
    created_at,
    networkId }: ICreateNodeDTO): Promise<Node> {
    const node = await this.repository.findOneBy({ id });

    node.name = name;
    node.latitude = latitude;
    node.longitude = longitude;
    node.description = description;
    node.created_at = created_at;
    node.networkId = networkId;

    await this.repository.save(node);


    return node;
  }

  async create({ name, latitude,
    longitude,
    description,
    created_at,
    networkId }: ICreateNodeDTO): Promise<Boolean> {
    const Node = this.repository.create({
      name, latitude,
      longitude,
      description,
      created_at,
      networkId
    });

    await this.repository.save(Node);

    const wasCreated = await this.repository.findOneBy({ name: name, created_at: created_at });

    if (wasCreated) {
      return true;
    }

    return false;
  }

  async findById(id: number): Promise<Node> {
    const node = await this.repository.findOneBy({ id });


    return node;
  }

  async getAllByNetworkId(id: number): Promise<Node[]> {
    const networks = await this.repository.find({where: { networkId: id}});

    return networks;
  }


}
export { NodeRepository };
