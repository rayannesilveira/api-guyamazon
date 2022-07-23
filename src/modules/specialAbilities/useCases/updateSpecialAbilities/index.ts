import { SpecialAbilitiesRepository } from "../../repositories/implementations/SpecialAbilitiesRepository";
import {UpdateSpecialAbilitiesService } from "../../services/UpdateSpecialAbilitiesService";
import {UpdateSpecialAbilitiesController } from "./UpdateSpecialAbilitiesController";



const specialAbilitiesRepository = new SpecialAbilitiesRepository;
const specialAbilitiesservice = new UpdateSpecialAbilitiesService(specialAbilitiesRepository);
const updateSpecialAbilitiesController = new UpdateSpecialAbilitiesController(specialAbilitiesservice);

export {updateSpecialAbilitiesController };
