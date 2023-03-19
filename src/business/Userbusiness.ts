import { GameUsersRepository } from "../repository/UserRepository";
import {
  GameUser,
  inputLoginDTO,
  inputSingupDTO,
  UserCategory,
} from "../models/GameUsersDTO";
import {
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  InvalidRole,
  EmailExist,
  CustomError,
} from "../error/CustomError";
import { IdGenerator } from "../services/Idgenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  constructor(
    private userDatabase: GameUsersRepository,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  async singup(input: inputSingupDTO): Promise<string> {
    try {
      if (!input.name) {
        throw new InvalidName();
      }
      if (!input.password) {
        throw new InvalidPassword();
      }
      if (!input.email) {
        throw new InvalidEmail();
      }
      if (!input.role) {
        throw new InvalidRole();
      }
      const isEmailDuplicate = await this.userDatabase.getUser(
        "email",
        input.email
      );
      if (isEmailDuplicate) {
        throw new EmailExist();
      }
      let role
      input.role.toUpperCase() === UserCategory.HARDCORE ? role = UserCategory.HARDCORE : role = UserCategory.GAMER
       
      const id = this.idGenerator.generateId();
      const hashPassword = await this.hashManager.generateHash(input.password);
      const newUser = new GameUser(
        id,
        input.name,
        input.email,
        hashPassword,
        role
      );
      await this.userDatabase.singup(newUser);
      return this.authenticator.generateToken({ id, role });
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
}


async login (input: inputLoginDTO): Promise<string> {
    try {
        if (!input.email) {
            throw new InvalidEmail()
        }
        if (!input.password) {
            throw new InvalidPassword()
        }
        if (!input.email.includes("@")) {
            throw new InvalidEmail()
        }

        const emailExists = await this.userDatabase.getUser("email", input.email)
        if (!emailExists) {
            throw new InvalidEmail()
        }

        const compareHash = await this.hashManager.compareHash(input.password, emailExists.password)
        if (!compareHash) {
            throw new InvalidPassword()
        }

        const token = this.authenticator.generateToken({ id: emailExists.id, role: emailExists.role})
        return token

    } catch (error: any) {
        throw new CustomError(error.statusCode, error.message)
    }
}
}