import { CollectedDataRepository } from "../../repositories/implementations/CollectedDataRepository";
import { GetAllCollectedDataService } from "../../services/GetAllCollectedDataService";
import { GetAllCollectedDataController } from "./GetAllCollectedDataController";


const collectedDataRepository = new CollectedDataRepository;
const collectedDataService = new GetAllCollectedDataService(collectedDataRepository);
const getAllCollectedDataController = new GetAllCollectedDataController(collectedDataService);

export { getAllCollectedDataController };
