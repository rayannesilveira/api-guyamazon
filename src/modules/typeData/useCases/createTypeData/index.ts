import { TypeDataRepository } from "../../repositories/implementations/TypeDataRepository";
import { CreateTypeDataService } from "../../services/CreateTypeDataService";
import { CreateTypeDataController } from "./CreateTypeDataController";


const typeDataRepository = new TypeDataRepository;
const typeDataService = new CreateTypeDataService(typeDataRepository);
const createTypeDataController = new CreateTypeDataController(typeDataService);

export { createTypeDataController };
