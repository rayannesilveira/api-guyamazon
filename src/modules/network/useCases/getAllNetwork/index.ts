import { NetworkRepository } from "../../repositories/implementations/NetworkRepository";
import { GetAllNetworkService } from "../../services/GetAllNetworkService";
import { GetAllNetworkController } from "./GetAllNetworkController";

const networkRepository = new NetworkRepository;
const networkService = new GetAllNetworkService(networkRepository);
const getAllNetworkController = new GetAllNetworkController(networkService);

export { getAllNetworkController };
