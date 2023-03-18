import { BaseDatabase } from "./BaseDataBase";
import { GameUsersRepository } from "../repository/UserRepository";
import { GameUser } from "../models/GameUsersDTO";
import { CustomError } from "../error/CustomError";
export class UserDataBase extends BaseDatabase implements GameUsersRepository {
    private TABLE_NAME = "Game_Users"
    async singup(newUser: GameUser): Promise<void> {
        try {
            await BaseDatabase.connection(this.TABLE_NAME).insert(newUser)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        };

    }
    async getUser(column: string, value: string): Promise<GameUser | undefined> {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME).select(column, value)
            return result[0]

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)

        }
    }
}