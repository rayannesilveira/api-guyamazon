import { NodeRepository } from "../../repositories/implementations/NodeRepository";
import { GetAllNodeByNetworkId } from "../../services/GetAllNodeByNetworkId";
import { GetAllNodeByNetworkIdController } from "./GetAllNodeByNetworkIdController";



const nodeRepository = new NodeRepository;
const getAllNodeByNetworkId = new GetAllNodeByNetworkId(nodeRepository);
const getAllNodeByNetworkIdController = new GetAllNodeByNetworkIdController(getAllNodeByNetworkId);

export { getAllNodeByNetworkIdController };
