import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/AuthenticateUserService";

class UserAuthenticateController{
  private userAuthenticateService: AuthenticateUserService;

  constructor(userAuthenticateService: AuthenticateUserService){
    this.userAuthenticateService = userAuthenticateService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { email, password } = request.body;

    const authInfo = await this.userAuthenticateService.execute({ email, password });
    
    return response.json(authInfo);
  }
}

export {UserAuthenticateController}
