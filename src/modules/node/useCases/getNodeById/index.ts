import { NodeRepository } from "../../repositories/implementations/NodeRepository";
import { GetNodeByIdService } from "../../services/GetNodeByIdService";
import { GetNodeByIdController } from "./GetNodeByIdController";


const nodeRepository = new NodeRepository;
const getByIdNodeService = new GetNodeByIdService(nodeRepository);
const getNodeByIdController = new GetNodeByIdController(getByIdNodeService);

export { getNodeByIdController };
