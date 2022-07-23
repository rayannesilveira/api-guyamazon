import { AgentRepository } from "../../../agents/repositories/implementations/AgentsRepository";
import { SpecialAbilitiesRepository } from "../../repositories/implementations/SpecialAbilitiesRepository";
import { GetSpecialAbilitiesByAgentService } from "../../services/GetSpecialAbilitiesByAgent";
import {GetSpecialAbilitiesByAgentController } from "./GetSpecialAbilitiesByAgentController";



const specialAbilitiesRepository = new SpecialAbilitiesRepository;
const agentRepository = new AgentRepository;
const specialAbilitiesservice = new GetSpecialAbilitiesByAgentService(specialAbilitiesRepository,agentRepository );
const getSpecialAbilitiesByAgentController = new GetSpecialAbilitiesByAgentController(specialAbilitiesservice);

export {getSpecialAbilitiesByAgentController };
