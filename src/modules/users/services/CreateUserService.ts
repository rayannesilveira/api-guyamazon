import { IUsersRepository } from "../repositories/IUsersRepository";
import { hash } from "bcrypt";


interface IRequest {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

class CreateUserService {

  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({ name, email, password, isAdmin }: IRequest): Promise<boolean> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists){
      return false;
    }
    

    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      isAdmin
    });
    return true;
  }
}

export { CreateUserService };
