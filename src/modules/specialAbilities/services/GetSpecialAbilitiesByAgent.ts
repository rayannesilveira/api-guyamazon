import { SpecialAbilities } from "../../../entity/SpecialAbilities";
import { IAgentsRepository } from "../../agents/repositories/IAgentsRepository";
import { ISpecialAbilitiesRepository } from "../repositories/ISpecialAbilitiesRepository";

class GetSpecialAbilitiesByAgentService {

  private specialAbilitiesRepository: ISpecialAbilitiesRepository;
  private agentRepository: IAgentsRepository;


  constructor(specialAbilitiesRepository: ISpecialAbilitiesRepository,  agentRepository: IAgentsRepository) {
    this.specialAbilitiesRepository = specialAbilitiesRepository;
    this.agentRepository = agentRepository;

  }
  async execute(id: number): Promise<SpecialAbilities[]> {
      const agent = await this.agentRepository.findById(id);
      if(agent){
        const specialAbilities = await this.specialAbilitiesRepository.getAllByAgent(id);

        return specialAbilities;
      }
      else{
        return [];
      }
     
  }
}

export { GetSpecialAbilitiesByAgentService };
