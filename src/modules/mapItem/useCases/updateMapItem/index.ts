import { MapItensRepository } from "../../repositories/implementations/MapItensRepository";
import { UpdateMapItensService } from "../../services/UpdateMapItensService";
import {UpdateMapItensController } from "./UpdateMapItensController";



const mapItensRepository = new MapItensRepository;
const mapItenservice = new UpdateMapItensService(mapItensRepository);
const updateMapItensController = new UpdateMapItensController(mapItenservice);

export {updateMapItensController };
