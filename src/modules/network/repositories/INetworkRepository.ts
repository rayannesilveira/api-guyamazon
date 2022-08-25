import { Network } from "../../../entity/Network";



interface INetworkRepository{

  create( data: ICreateNetworkDTO) : Promise<Boolean>;
  findById( id: number ) : Promise<Network>;
  getAll(): Promise<Network[]>;
  addTypes( id: number, types: number[]): Promise<Network>;
  addType(id: number, typeId: number): Promise<Boolean>;
}

export { INetworkRepository }
