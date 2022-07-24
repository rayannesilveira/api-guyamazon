import { Request, Response } from "express";
import { CreateNodeService } from "../../services/CreateNodeService";

class CreateNodeController{
  private createNodeService: CreateNodeService;

  constructor(createNodeService: CreateNodeService){
    this.createNodeService = createNodeService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name, latitude,
      longitude,
      description,
      created_at,
      networkId } = request.body;

    const wasCreated = await this.createNodeService.execute({name, latitude,
      longitude,
      description,
      created_at,
      networkId});

    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao cadastrar o nó.");
    }
  }
}

export {CreateNodeController}
