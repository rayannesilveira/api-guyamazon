import { TypeDataRepository } from "../../repositories/implementations/TypeDataRepository";
import { GetTypeDataByIdService } from "../../services/GetTypeDataByIdService";
import { GetTypeDataController } from "./GetTypeDataController";


const typeDataRepository = new TypeDataRepository;
const getByIdTypeDataService = new GetTypeDataByIdService(typeDataRepository);
const getByIdTypeDataController = new GetTypeDataController(getByIdTypeDataService);

export { getByIdTypeDataController };
