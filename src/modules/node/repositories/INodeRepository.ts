import { Node } from "../../../entity/Node";

interface INodeRepository{

  create( data: ICreateNodeDTO): Promise<Boolean>;
  findById( id: number ): Promise<Node>;
  update( id: number, data: ICreateNodeDTO): Promise<Node>;
  getAllByNetworkId( id: number ): Promise<Node[]>;
}

export { INodeRepository };
