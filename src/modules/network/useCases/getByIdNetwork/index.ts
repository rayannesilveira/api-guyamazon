import { NetworkRepository } from "../../repositories/implementations/NetworkRepository";
import { GetNetworkByIdService } from "../../services/GetNetworkByIdService";
import { GetByIdNetworkController } from "./GetByIdNetworkController";

const networkRepository = new NetworkRepository;
const networkService = new GetNetworkByIdService(networkRepository);
const getNetworkByIdController = new GetByIdNetworkController(networkService);

export { getNetworkByIdController };
