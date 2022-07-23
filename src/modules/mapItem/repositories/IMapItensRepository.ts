import { MapItem } from "../../../entity/MapItem";

interface IMapItensRepository{

  create( data: ICreateMapItemDTO) : Promise<void>;
  findByName( name: string ) : Promise<MapItem>;
  findById( id: number ) : Promise<MapItem>;
  deleteById( id: number ): Promise<Boolean>;
  updateById( id: number, { name, imageURL}: ICreateMapItemDTO): Promise<Boolean>;
}

export { IMapItensRepository }
