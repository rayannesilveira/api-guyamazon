import { Not, Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { Tutorial } from "../../../../entity/Tutorial";
import { ITutorialRepository } from "../ITutorialRepository";

class TutorialRepository implements ITutorialRepository {
  private repository: Repository<Tutorial>;

  constructor() {
    this.repository = AppDataSource.getRepository(Tutorial);
  }
  
  async create({ title, description, link, mapId, agentId }: ICreateTutorialDTO): Promise<void> {
    const tutorial =  this.repository.create({
      title, description, link, mapId, agentId
    });

    await this.repository.save(tutorial);
  }

  async findByName(title: string): Promise<Tutorial> {
    const tutorial = await this.repository.findOne({where: { title: title}});
    return tutorial;
  
  }


  async findById(id: number): Promise<Tutorial> {
    const tutorial = await this.repository.findOne({where: { id: id}});
    return tutorial;
  
  }
  

  async deleteById(id: number): Promise<Boolean> {
    const tutorial = await this.repository.findOne({where: { id: id}});
    
    if(tutorial){
      await this.repository.delete(tutorial);

      return true;
    }
    else{
      return false;
    }

  }
  
  async updateById(id: number, {title, description, link, mapId, agentId} : ICreateTutorialDTO): Promise<Boolean> {
    const tutorial = await this.repository.findOne({where: { id: id}});
    const newName = await this.repository.findOne({where: { title: title, id: Not(id)}});

    if(newName){
      return false;
    }
    else{
      tutorial.title = title;
      tutorial.description = description;
      tutorial.link = link;
      tutorial.mapId = mapId;
      tutorial.agentId = agentId;

      this.repository.save(tutorial);
      
      return true;
    }
  }

  async findByAgent(agentId: number): Promise<Tutorial[]> {
    const tutorials = await this.repository.find({where: { agentId: agentId}});
    return tutorials;
  }

  async findByMapAgent(agentId: number, mapId: number): Promise<Tutorial[]> {
    const tutorials = await this.repository.find({where: { agentId: agentId, mapId: mapId}});
    return tutorials;
  }


}

export { TutorialRepository}