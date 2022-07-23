import { IUsersRepository } from "../repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse{
  user:{
    name: string,
    email: string,
  },
  token: string
}

class AuthenticateUserService {

  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({ email, password  }: IRequest): Promise<IResponse>{
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new Error("E-mail ou senha incorretos!");
    }
    
    const passwordCorrect = await compare(password, user.password);

    if(!passwordCorrect){
      throw new Error("E-mail ou senha incorretos!");
    }

    const jwtToken =  sign({}, "ef1f16ec5c8475", {
      expiresIn: "1d",
      subject: user.email
    }); 

    const responseToken: IResponse = {
      token: jwtToken,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return responseToken;

  }
}

export { AuthenticateUserService };
