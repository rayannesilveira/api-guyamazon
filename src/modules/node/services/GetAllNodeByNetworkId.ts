import { Node } from "../../../entity/Node";
import { INodeRepository } from "../repositories/INodeRepository";

class GetAllNodeByNetworkId{
  private nodeRepository: INodeRepository;

  constructor(nodeRepository: INodeRepository){
    this.nodeRepository = nodeRepository;
  }

  async execute(id: number): Promise<Node[]> {
    const nodes = await this.nodeRepository.getAllByNetworkId(id);

    return nodes;
  }
}

export { GetAllNodeByNetworkId};
