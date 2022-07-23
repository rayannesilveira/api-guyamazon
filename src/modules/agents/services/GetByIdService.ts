import { Agent } from "../../../entity/Agent";
import { IAgentsRepository } from "../../agents/repositories/IAgentsRepository";

class GetByIdService {

  private agentRepository: IAgentsRepository;

  constructor(agentRepository: IAgentsRepository) {
    this.agentRepository = agentRepository;
  }
  async execute(id: number): Promise<Agent> {
    const agent = await this.agentRepository.findById(id);

    return agent;
  }
}

export { GetByIdService };
