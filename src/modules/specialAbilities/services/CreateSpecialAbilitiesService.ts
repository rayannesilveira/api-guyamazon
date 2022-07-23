import { IAgentsRepository } from "../../agents/repositories/IAgentsRepository";
import { ISpecialAbilitiesRepository } from "../repositories/ISpecialAbilitiesRepository";

class CreateSpecialAbilitiesService {

  private specialAbilityRepository: ISpecialAbilitiesRepository;
  private agentRepository: IAgentsRepository;

  constructor(specialAbilityRepository: ISpecialAbilitiesRepository, agentRepository: IAgentsRepository) {
    this.specialAbilityRepository = specialAbilityRepository;
    this.agentRepository = agentRepository;
  }
  async execute(agentId: number, { name, description, key, videoURL}: ICreateSpecialAbilityDTO): Promise<Boolean> {
    const specialAbilityAlreadyExists = await this.specialAbilityRepository.findByName(name);
    const agentExists = await this.agentRepository.findById(agentId);

    if(specialAbilityAlreadyExists || !agentExists){
      return false;
    }else{
      await this.specialAbilityRepository.create(agentId, { name, description, key, videoURL });

      return true;
    }
  }
}

export { CreateSpecialAbilitiesService };
