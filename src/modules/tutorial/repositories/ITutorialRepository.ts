import { Tutorial } from "../../../entity/Tutorial";

interface ITutorialRepository{

  create( { title, description, link, mapId, agentId }: ICreateTutorialDTO) : Promise<void>;
  findByName( name: string ) : Promise<Tutorial>;
  findById( id: number ) : Promise<Tutorial>;
  findByAgent( agentId: number ) : Promise<Tutorial[]>;
  findByMapAgent( agentId: number, mapId: number ) : Promise<Tutorial[]>;
  deleteById( id: number ): Promise<Boolean>;
  updateById( id: number, { title, description, link, mapId, agentId }: ICreateTutorialDTO): Promise<Boolean>;
}

export { ITutorialRepository }
