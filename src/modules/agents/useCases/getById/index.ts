import { AgentRepository } from "../../repositories/implementations/AgentsRepository";
import { GetByIdService } from "../../services/GetByIdService";
import { GetAgentByIdController } from "./GetAgentByIdController";


const agentRepository = new AgentRepository;
const agentService = new GetByIdService(agentRepository);
const getAgentByIdController = new GetAgentByIdController(agentService);

export { getAgentByIdController };
