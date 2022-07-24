import { Request, Response } from "express";
import { GetNodeByIdService } from "../../services/GetNodeByIdService";

class GetNodeByIdController{
  private getNodeByIdService: GetNodeByIdService;

  constructor(getNodeByIdService: GetNodeByIdService){
    this.getNodeByIdService = getNodeByIdService;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
  
    const node = await this.getNodeByIdService.execute({id: id });

    return response.status(200).json(node);
  }
}

export { GetNodeByIdController};
