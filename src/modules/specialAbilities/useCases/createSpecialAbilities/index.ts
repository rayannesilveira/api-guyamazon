import { AgentRepository } from "../../../agents/repositories/implementations/AgentsRepository";
import { SpecialAbilitiesRepository } from "../../repositories/implementations/SpecialAbilitiesRepository";
import { CreateSpecialAbilitiesService } from "../../services/CreateSpecialAbilitiesService";
import { CreateSpecialAbilitiesController } from "./CreateSpecialAbilitiesController";



const specialAbilitiesesRepository = new SpecialAbilitiesRepository;
const agentRepository = new AgentRepository;

const specialAbilitieseservice = new CreateSpecialAbilitiesService(specialAbilitiesesRepository, agentRepository);
const createSpecialAbilitiesController = new CreateSpecialAbilitiesController(specialAbilitieseservice);

export { createSpecialAbilitiesController };
