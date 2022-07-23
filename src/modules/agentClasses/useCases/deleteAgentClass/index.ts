import { AgentClassesRepository } from "../../repositories/implementations/AgentClassesRepository";
import {DeleteAgentClassService } from "../../services/DeleteAgentClassService";
import {DeleteAgentClassController } from "./DeleteAgentClassController";



const agentClassesRepository = new AgentClassesRepository;
const AgentClasseservice = new DeleteAgentClassService(agentClassesRepository);
const deleteAgentClassController = new DeleteAgentClassController(AgentClasseservice);

export {deleteAgentClassController };
