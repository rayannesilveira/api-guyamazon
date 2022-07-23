import { AgentClassesRepository } from "../../../agentClasses/repositories/implementations/AgentClassesRepository";
import { AgentRepository } from "../../repositories/implementations/AgentsRepository";
import { CreateAgentService } from "../../services/CreateAgentService";
import { CreateAgentController } from "./CreateAgentController";


const agentRepository = new AgentRepository;
const agentClassRepository = new AgentClassesRepository;
const agentService = new CreateAgentService(agentRepository, agentClassRepository);
const createAgentController = new CreateAgentController(agentService);

export { createAgentController };
