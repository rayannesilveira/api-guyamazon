import { ITutorialRepository } from "../repositories/ITutorialRepository";

class CreateTutorialService {

  private tutorialRepository: ITutorialRepository;

  constructor(tutorialRepository: ITutorialRepository) {
    this.tutorialRepository = tutorialRepository;
  }
  async execute({title, description, link, mapId, agentId} : ICreateTutorialDTO): Promise<Boolean> {
    const tutorialAlreadyExists = await this.tutorialRepository.findByName(title);

    if(tutorialAlreadyExists){
      return false;
    }else{
      await this.tutorialRepository.create({title, description, link, mapId, agentId});

      return true;
    }
  }
}

export { CreateTutorialService };
