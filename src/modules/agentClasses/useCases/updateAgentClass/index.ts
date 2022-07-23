import { AgentClassesRepository } from "../../repositories/implementations/AgentClassesRepository";
import {UpdateAgentClassService } from "../../services/UpdateAgentClassService";
import {UpdateAgentClassController } from "./UpdateAgentClassController";



const agentClassesRepository = new AgentClassesRepository;
const AgentClasseservice = new UpdateAgentClassService(agentClassesRepository);
const updateAgentClassController = new UpdateAgentClassController(AgentClasseservice);

export {updateAgentClassController };
