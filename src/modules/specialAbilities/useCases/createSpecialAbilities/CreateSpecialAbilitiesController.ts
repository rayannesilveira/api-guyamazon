import { Request, Response } from "express";
import { CreateSpecialAbilitiesService } from "../../services/CreateSpecialAbilitiesService";



class CreateSpecialAbilitiesController{
  private createSpecialAbilitiesService: CreateSpecialAbilitiesService;

  constructor(createSpecialAbilitiesService: CreateSpecialAbilitiesService){
    this.createSpecialAbilitiesService = createSpecialAbilitiesService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name, description, key, videoURL, agentId } = request.body;
   
    const wasCreated = await this.createSpecialAbilitiesService.execute(parseInt(agentId), {name, description, key, videoURL});
    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao cadastrar. Ou habilidade com esse nome já existe.");
    }
  }
}

export {CreateSpecialAbilitiesController}
