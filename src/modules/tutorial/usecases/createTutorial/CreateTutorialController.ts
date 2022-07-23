import { Request, Response } from "express";
import { CreateTutorialService } from "../../services/CreateTutorialService";



class CreateTutorialController{
  private createTutorialService: CreateTutorialService;

  constructor(createTutorialService: CreateTutorialService){
    this.createTutorialService = createTutorialService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {title, description, link, mapId, agentId} = request.body;

    const wasCreated = await this.createTutorialService.execute({title, description, link, mapId, agentId});
    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao cadastrar. Ou tutorial com esse nome já existe.");
    }
  }
}

export {CreateTutorialController}
