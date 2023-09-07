import { CollectedDataRepository } from "../../repositories/implementations/CollectedDataRepository";
import { GetLastDataCollectedService } from "../../services/GetLastCollectedData";
import { GetLastCollectedDataController } from "./GetLastCollectedDataController";

const collectedDataRepository = new CollectedDataRepository;
const collectedDataService = new GetLastDataCollectedService(collectedDataRepository);
const getLastCollectedDataController = new GetLastCollectedDataController(collectedDataService);

export { getLastCollectedDataController };
