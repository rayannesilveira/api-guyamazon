import { MapItensRepository } from "../../repositories/implementations/MapItensRepository";
import { DeleteMapItensService } from "../../services/DeleteMapItensService";
import {DeleteMapItensController } from "./DeleteMapItensController";



const mapItensRepository = new MapItensRepository;
const mapItenservice = new DeleteMapItensService(mapItensRepository);
const deleteMapItensController = new DeleteMapItensController(mapItenservice);

export {deleteMapItensController };
