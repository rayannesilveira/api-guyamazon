import { IAgentClassesRepository } from "../repositories/IAgentClassesRepository";

class UpdateAgentClassService {

  private agentClassRepository: IAgentClassesRepository;

  constructor(agentClassRepository: IAgentClassesRepository) {
    this.agentClassRepository = agentClassRepository;
  }
  async execute(id: number, name: string): Promise<Boolean> {
      const agentClass = await this.agentClassRepository.updateById(id, name);

      return agentClass;
  }
}

export { UpdateAgentClassService };
