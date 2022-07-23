import { Request, Response } from "express";
import { UpdateMapItensService } from "../../services/UpdateMapItensService";



class UpdateMapItensController{
  private updateMapItemService: UpdateMapItensService;

  constructor(updateMapItemService: UpdateMapItensService){
    this.updateMapItemService = updateMapItemService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name, imageURL } = request.body;
    const {id} = request.params;

    const wasUpdated = await this.updateMapItemService.execute(parseInt(id), name, imageURL );
    if(wasUpdated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao atualizar. Ou mapa com esse nome já existe.");
    }
  }
}

export {UpdateMapItensController}
