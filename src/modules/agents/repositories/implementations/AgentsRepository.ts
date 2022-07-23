import { Not, Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { Agent } from "../../../../entity/Agent";
import { IAgentsRepository } from "../IAgentsRepository";



class AgentRepository implements IAgentsRepository {
  private repository: Repository<Agent>;

  constructor() {
    this.repository = AppDataSource.getRepository(Agent);
  }


  async create({ name, agentClassId, image }: ICreateAgentDTO): Promise<void> {
    const agent = this.repository.create({
      name, agentClassId, image
    });

    await this.repository.save(agent);
  }

  async findByName(name: string): Promise<Agent> {
    const agent = await this.repository.findOne({ where: { name: name } });
    return agent;
  }

  async findById(id: number): Promise<Agent> {
    const agent = await this.repository.findOne({ where: { id: id } });
    return agent;
  }

  async findByClassId(idClass: number): Promise<Agent[]> {


    const agents = await this.repository.find({ where: { agentClassId: idClass } });
    return agents;
  }

  async getAll(): Promise<Agent[]> {
    const agents = await this.repository.find({});
    return agents;
  }


  async deleteById(id: number): Promise<Boolean> {
    const agent = await this.repository.findOne({where: { id: id}});
    
    if(agent){
      await this.repository.delete(agent);

      return true;
    }
    else{
      return false;
    }

  }

  async updateById(id: number, { name, agentClassId, image }: ICreateAgentDTO): Promise<Boolean> {
    const agent = await this.repository.findOne({where: { id: id}});
    const newName = await this.repository.findOne({where: { name: name, id: Not(id)}});

    if(newName){
      return false;
    }
    else{
      agent.name = name;
      agent.agentClassId = agentClassId;
      agent.image = image;

      await this.repository.save(agent);
      
      return true;
    }
  }
}

export { AgentRepository }