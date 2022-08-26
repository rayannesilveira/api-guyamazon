import { NetworkRepository } from "../../repositories/implementations/NetworkRepository";
import { AddTypeService } from "../../services/AddTypeService";
import { AddTypeToNetworkController } from "./AddTypeToNetworkController";

const networkRepository = new NetworkRepository;
const networkService = new AddTypeService(networkRepository);
const addTypeToNetworkController = new AddTypeToNetworkController(networkService);

export { addTypeToNetworkController };
