import { NetworkRepository } from "../../repositories/implementations/NetworkRepository";
import { CreateNetworkService } from "../../services/CreateNetworkService";
import { CreateNetworkController } from "./CreateNetworkController";



const networkRepository = new NetworkRepository;
const NetworkService = new CreateNetworkService(networkRepository);
const createNetworkController = new CreateNetworkController(NetworkService);

export { createNetworkController };
