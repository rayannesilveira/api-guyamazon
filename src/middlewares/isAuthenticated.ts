import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";

interface IInfoUser{
    sub: string
}


export async function isAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;
    
    if(!authHeader){
         
        response.status(403).end();
        return;
    }

    const [, token] = authHeader.split(" ");

    try{
        const { sub } = verify(token, "ef1f16ec5c8475") as IInfoUser;
        const usersRepository = new UsersRepository();

        const isValid = await usersRepository.findByEmail(sub);

        if(!isValid){
            
            response.status(403).end();
            return;
        }

        next();

    }catch{
         
        response.status(403).end();
        return;
    }
}