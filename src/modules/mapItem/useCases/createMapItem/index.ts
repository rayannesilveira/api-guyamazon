import { MapItensRepository } from "../../repositories/implementations/MapItensRepository";
import { CreateMapItensService } from "../../services/CreateMapItensService";
import { CreateMapItensController } from "./CreateMapItensController";



const mapItensRepository = new MapItensRepository;
const mapItenservice = new CreateMapItensService(mapItensRepository);
const createMapItensController = new CreateMapItensController(mapItenservice);

export { createMapItensController };
