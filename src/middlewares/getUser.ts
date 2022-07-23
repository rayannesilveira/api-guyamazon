import { verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";

interface IInfoUser{
    sub: string
}


export async function getUser(request: Request, response: Response) {
    const authHeader = request.headers.authorization;
    
    if(!authHeader){
        return null;
    }

    const [, token] = authHeader.split(" ");

    try{
        const { sub } = verify(token, "ef1f16ec5c8475") as IInfoUser;
        const usersRepository = new UsersRepository();

        const isValid = await usersRepository.findByEmail(sub);

        if(!isValid){
           return null;
        }

        return isValid;

    }catch{
        return null;
    }
}

