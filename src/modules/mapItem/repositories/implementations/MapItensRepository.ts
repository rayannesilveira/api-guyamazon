import { Not, Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { MapItem } from "../../../../entity/MapItem";
import { IMapItensRepository } from "../IMapItensRepository";


class MapItensRepository implements IMapItensRepository {
  private repository: Repository<MapItem>;

  constructor() {
    this.repository = AppDataSource.getRepository(MapItem);
  }
  async create({ name, imageURL }: ICreateMapItemDTO): Promise<void> {
    const mapItem =  this.repository.create({
      name,
      imageURL
    });

    await this.repository.save(mapItem);

  }

  async findByName(name: string): Promise<MapItem> {
    const mapItem = await this.repository.findOne({where: { name: name}});
    return mapItem;
  
  }


  async findById(id: number): Promise<MapItem> {
    const mapItem = await this.repository.findOne({where: { id: id}});
    return mapItem;
  
  }

  async deleteById(id: number): Promise<Boolean> {
    const mapItem = await this.repository.findOne({where: { id: id}});
    
    if(mapItem){
      this.repository.delete(mapItem);

      return true;
    }
    else{
      return false;
    }

  }
  
  async updateById(id: number,{ name, imageURL}: ICreateMapItemDTO): Promise<Boolean> {
    const mapItem = await this.repository.findOne({where: { id: id}});
    const newName = await this.repository.findOne({where: { name: name, id: Not(id)}});

    if(newName){
      return false;
    }
    else{
      mapItem.name = name;
      mapItem.imageURL = imageURL;

      this.repository.save(mapItem);
      
      return true;
    }
  }
}

export { MapItensRepository}