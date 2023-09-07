import { Request, Response } from "express";
import { GetLastDataCollectedService } from "../../services/GetLastCollectedData";

class GetLastCollectedDataController{
  private collectedDataGetLastService: GetLastDataCollectedService;

  constructor(collectedDataGetLastService: GetLastDataCollectedService){
    this.collectedDataGetLastService = collectedDataGetLastService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
      const collectedData = await this.collectedDataGetLastService.execute();
    
   
      return response.status(201).send(collectedData);

  
  }
}

export { GetLastCollectedDataController };
