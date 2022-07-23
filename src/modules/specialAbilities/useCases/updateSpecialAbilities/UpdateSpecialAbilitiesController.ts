import { Request, Response } from "express";
import { UpdateSpecialAbilitiesService } from "../../services/UpdateSpecialAbilitiesService";



class UpdateSpecialAbilitiesController{
  private updateSpecialAbilitiesService: UpdateSpecialAbilitiesService;

  constructor(updateSpecialAbilitiesService: UpdateSpecialAbilitiesService){
    this.updateSpecialAbilitiesService = updateSpecialAbilitiesService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name} = request.body;
    const {id} = request.params;

    const wasUpdated = await this.updateSpecialAbilitiesService.execute(parseInt(id), name);
    if(wasUpdated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao atualizar. Ou habilidade com esse nome já existe.");
    }
  }
}

export {UpdateSpecialAbilitiesController}
