import { NodeRepository } from "../../repositories/implementations/NodeRepository";
import { CreateNodeService } from "../../services/CreateNodeService";
import { CreateNodeController } from "./CreateNodeController";



const nodeRepository = new NodeRepository;
const nodeService = new CreateNodeService(nodeRepository);
const createNodeController = new CreateNodeController(nodeService);

export { createNodeController };
