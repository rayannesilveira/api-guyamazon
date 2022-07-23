import { User } from "../../../entity/User";

interface IUsersRepository{

  create( data: ICreateUserDTO) : Promise<void>;
  findByEmail( email: string ) : Promise<User>;
  findById( id: number ) : Promise<User>;
}

export { IUsersRepository }
