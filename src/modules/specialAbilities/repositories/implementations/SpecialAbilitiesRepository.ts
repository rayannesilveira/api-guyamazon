import { Not, Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { SpecialAbilities } from "../../../../entity/SpecialAbilities";
import { ISpecialAbilitiesRepository } from "../ISpecialAbilitiesRepository";

class SpecialAbilitiesRepository implements ISpecialAbilitiesRepository {
  private repository: Repository<SpecialAbilities>;

  constructor() {
    this.repository = AppDataSource.getRepository(SpecialAbilities);
  }

  async create(agentId: number, { name, description, key, videoURL}: ICreateSpecialAbilityDTO): Promise<void> {
    
    const specialAbilities =  this.repository.create({
      name, description, key, videoURL, agentId
    });

    await this.repository.save(specialAbilities);

  }

  async findByName(name: string): Promise<SpecialAbilities> {
    const specialAbilities = await this.repository.findOne({where: { name: name}});
    return specialAbilities;
  
  }


  async findById(id: number): Promise<SpecialAbilities> {
    const specialAbilities = await this.repository.findOne({where: { id: id}});
    return specialAbilities;
  
  }

  async deleteById(id: number): Promise<Boolean> {
    const specialAbilities = await this.repository.findOne({where: { id: id}});
    
    if(specialAbilities){
      await this.repository.delete(specialAbilities);

      return true;
    }
    else{
      return false;
    }

  }
  
  async updateById(id: number,{ name, description, key, videoURL}: ICreateSpecialAbilityDTO): Promise<Boolean> {
    const specialAbilities = await this.repository.findOne({where: { id: id}});
    const newName = await this.repository.findOne({where: { name: name, id: Not(id)}});

    if(newName){
      return false;
    }
    else{
      specialAbilities.name = name;
      specialAbilities.key = key;
      specialAbilities.description = description;
      specialAbilities.videoURL = videoURL;

      await this.repository.save(specialAbilities);
      
      return true;
    }
  }

  async getAllByAgent(id: number): Promise<SpecialAbilities[]> {
    const specialAbilities = await this.repository.find({where: { agentId: id}});

    return specialAbilities;
  }
}

export { SpecialAbilitiesRepository}