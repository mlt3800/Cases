import { UserBusiness } from "../business/Userbusiness";
import { inputSingupDTO, inputLoginDTO } from "../models/GameUsersDTO";
import { Request, Response } from "express";
export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  async signup(req: Request, res: Response): Promise<void> {
    try {
      const input: inputSingupDTO = {
        name: req.body.name,
        email: "email",
        password: req.body.password,
        role: req.body.role,
      };
      const token = await this.userBusiness.singup(input);
      res.status(201).send({ message: "User singup success", token });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  }
  async login(req: Request, res: Response): Promise<void> {
    try {
      const input: inputLoginDTO = {
        email: "email",
        password: req.body.password
      }
      const token = await this.userBusiness.login(input)
      res.status(200).send({  token });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  }
}
