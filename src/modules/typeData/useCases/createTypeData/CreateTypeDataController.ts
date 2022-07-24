import { Request, Response } from "express";
import { CreateTypeDataService } from "../../services/CreateTypeDataService";


class CreateTypeDataController{
  private typeDataCreateService: CreateTypeDataService;

  constructor(typeDataCreateService: CreateTypeDataService){
    this.typeDataCreateService = typeDataCreateService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { name, type } = request.body;

    const wasCreated = await this.typeDataCreateService.execute({ name, type });
    
    if(!wasCreated){
      return response.status(422).send("Tipo de dado já existe.");
    }
    else{
      return response.status(201).send();

    }
  }
}

export { CreateTypeDataController };
