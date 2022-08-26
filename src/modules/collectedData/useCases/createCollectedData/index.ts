import { CollectedDataRepository } from "../../repositories/implementations/CollectedDataRepository";
import { CreateCollectedDataService } from "../../services/CreateCollectedDataService";
import { CreateCollectedDataController } from "./CreateCollectedDataController";


const collectedDataRepository = new CollectedDataRepository;
const collectedDataService = new CreateCollectedDataService(collectedDataRepository);
const createCollectedDataController = new CreateCollectedDataController(collectedDataService);

export { createCollectedDataController };
