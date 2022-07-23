import { IAgentClassesRepository } from "../repositories/IAgentClassesRepository";

class CreateAgentClassService {

  private agentClassRepository: IAgentClassesRepository;

  constructor(agentClassRepository: IAgentClassesRepository) {
    this.agentClassRepository = agentClassRepository;
  }
  async execute(name: string): Promise<Boolean> {
    const agentClassAlreadyExists = await this.agentClassRepository.findByName(name);

    if(agentClassAlreadyExists){
      return false;
    }else{
      await this.agentClassRepository.create({name});

      return true;
    }
  }
}

export { CreateAgentClassService };
