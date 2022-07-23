import { IAgentClassesRepository } from "../../agentClasses/repositories/IAgentClassesRepository";
import { IAgentsRepository } from "../../agents/repositories/IAgentsRepository";

class CreateAgentService {

  private agentRepository: IAgentsRepository;
  private agentClassRepository: IAgentClassesRepository;

  constructor(agentRepository: IAgentsRepository, agentClassRepository: IAgentClassesRepository) {
    this.agentRepository = agentRepository;
    this.agentClassRepository = agentClassRepository;
  }
  async execute({ name, agentClassId, image}: ICreateAgentDTO): Promise<Boolean> {
    const agentExists = await this.agentRepository.findByName(name);
    const agentClassExists = await this.agentClassRepository.findById(agentClassId);

    if(agentExists || !agentClassExists){
      return false;
    }else{
      await this.agentRepository.create( { name, agentClassId, image });

      return true;
    }
  }
}

export { CreateAgentService };
