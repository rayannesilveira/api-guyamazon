import { Request, Response } from "express";
import { CreateMapItensService } from "../../services/CreateMapItensService";



class CreateMapItensController{
  private createMapItensService: CreateMapItensService;

  constructor(createMapItensService: CreateMapItensService){
    this.createMapItensService = createMapItensService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name, imageURL } = request.body;

    const wasCreated = await this.createMapItensService.execute(name, imageURL);
    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao cadastrar. Ou mapa com esse nome já existe.");
    }
  }
}

export {CreateMapItensController}
