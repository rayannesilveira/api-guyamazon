import { Not, Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { AgentClass } from "../../../../entity/AgentClass";
import { IAgentClassesRepository } from "../IAgentClassesRepository";

class AgentClassesRepository implements IAgentClassesRepository {
  private repository: Repository<AgentClass>;

  constructor() {
    this.repository = AppDataSource.getRepository(AgentClass);
  }

  async create({ name }: ICreateAgentClassDTO): Promise<void> {
    const agentClass =  this.repository.create({
      name
    });

    await this.repository.save(agentClass);

  }

  async findByName(name: string): Promise<AgentClass> {
    const agentClass = await this.repository.findOne({where: { name: name}});
    return agentClass;
  
  }


  async findById(id: number): Promise<AgentClass> {
    const agentClass = await this.repository.findOne({where: { id: id}});
    return agentClass;
  
  }

  async deleteById(id: number): Promise<Boolean> {
    const agentClass = await this.repository.findOne({where: { id: id}});
    
    if(agentClass){
      await this.repository.delete(agentClass);

      return true;
    }
    else{
      return false;
    }

  }
  
  async updateById(id: number, name: string): Promise<Boolean> {
    const agentClass = await this.repository.findOne({where: { id: id}});
    const newName = await this.repository.findOne({where: { name: name, id: Not(id)}});

    if(newName){
      return false;
    }
    else{
      agentClass.name = name;

      await this.repository.save(agentClass);
      
      return true;
    }
  }
}

export { AgentClassesRepository}