import { IAgentClassesRepository } from "../repositories/IAgentClassesRepository";

class DeleteAgentClassService {

  private agentClassRepository: IAgentClassesRepository;

  constructor(agentClassRepository: IAgentClassesRepository) {
    this.agentClassRepository = agentClassRepository;
  }
  async execute(id: number): Promise<Boolean> {
      const wasDeleted = await this.agentClassRepository.deleteById(id);
      return wasDeleted;
  }
}

export { DeleteAgentClassService };
