import { Request, Response } from "express";
import { GetAllCollectedDataService } from "../../services/GetAllCollectedDataService";


class GetAllCollectedDataController{
  private collectedDataGetAllService: GetAllCollectedDataService;

  constructor(collectedDataGetAllService: GetAllCollectedDataService){
    this.collectedDataGetAllService = collectedDataGetAllService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
      const collectedData = await this.collectedDataGetAllService.execute();
    
   
      return response.status(201).send(collectedData);

  
  }
}

export { GetAllCollectedDataController };
