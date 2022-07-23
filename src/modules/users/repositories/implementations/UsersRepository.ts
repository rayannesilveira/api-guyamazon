import { Repository } from "typeorm";
import { User } from "../../../../entity/User";
import { IUsersRepository } from "../IUsersRepository";
import { AppDataSource } from "../../../../data-source";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  

  async findById(id: number): Promise<User> {
    const hasUser = await this.repository.findOne({ where: { id: id }});
    return hasUser;
  }
  
  async findByEmail(email: string): Promise<User>{
    const hasUser = await this.repository.findOne({ where: { email: email}});
    return hasUser;
  }
  
  async create({ name, email, password, isAdmin }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name, email, password, isAdmin
    });
    
    await this.repository.save(user);
  }

}

export { UsersRepository }
