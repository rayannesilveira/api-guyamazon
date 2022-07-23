import {SpecialAbilitiesRepository } from "../../repositories/implementations/SpecialAbilitiesRepository";
import {DeleteSpecialAbilitiesService } from "../../services/DeleteSpecialAbilitiesService";
import {DeleteSpecialAbilitiesController } from "./DeleteSpecialAbilitiesController";



const specialAbilitiesRepository = new SpecialAbilitiesRepository;
const specialAbilitieservice = new DeleteSpecialAbilitiesService(specialAbilitiesRepository);
const deleteSpecialAbilitiesController = new DeleteSpecialAbilitiesController(specialAbilitieservice);

export {deleteSpecialAbilitiesController };
