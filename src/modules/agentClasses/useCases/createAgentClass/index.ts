import { AgentClassesRepository } from "../../repositories/implementations/AgentClassesRepository";
import { CreateAgentClassService } from "../../services/CreateAgentClassService";
import { CreateAgentClassController } from "./CreateAgentClassController";



const agentClassesRepository = new AgentClassesRepository;
const AgentClasseservice = new CreateAgentClassService(agentClassesRepository);
const createAgentClassController = new CreateAgentClassController(AgentClasseservice);

export { createAgentClassController };
