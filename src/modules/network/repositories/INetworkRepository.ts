import { Network } from "../../../entity/Network";



interface INetworkRepository{

  create( data: ICreateNetworkDTO) : Promise<Boolean>;
  findById( id: number ) : Promise<Network>;
  getAll(): Promise<Network[]>;
}

export { INetworkRepository }
