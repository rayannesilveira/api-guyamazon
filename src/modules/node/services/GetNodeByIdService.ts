import { Node } from "../../../entity/Node";
import { INodeRepository } from "../repositories/INodeRepository";

class GetNodeByIdService {

  private nodeRepository: INodeRepository;

  constructor(nodeRepository: INodeRepository){
    this.nodeRepository = nodeRepository;
  }
  async execute({ id }): Promise<Node> {
    const Node = await this.nodeRepository.findById(id);

    return Node;
  }
}

export { GetNodeByIdService };
