import { Request, Response } from "express";
import { GetAllNodeByNetworkId } from "../../services/GetAllNodeByNetworkId";


class GetAllNodeByNetworkIdController{

  private getAllNodeByNetworkId: GetAllNodeByNetworkId;

  constructor(getAllNodeByNetworkId: GetAllNodeByNetworkId) {
    this.getAllNodeByNetworkId = getAllNodeByNetworkId;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const allNodes = await this.getAllNodeByNetworkId.execute(parseInt(id));
    if(allNodes.length > 0){
      return response.status(200).json(allNodes);
    }
    else{
      return response.status(422).json("Recurso não encontrado.");
    }
    

  }
}

export { GetAllNodeByNetworkIdController };
