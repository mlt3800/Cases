import { CustomError } from "../error/CustomError";
import { GameDTO } from "../models/GamesDTO";
import { GamesRepository } from "../repository/GamesRepository";
import { BaseDatabase } from "./BaseDataBase";

export class CreateGameDTO extends BaseDatabase implements GamesRepository {
    private TABLE_NAME = "Games"
    async createGame(newGame: GameDTO): Promise<void> {
        try {
            await BaseDatabase.connection(this.TABLE_NAME).insert(newGame)
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
    async getGames(columns: string, value: string): Promise<any> {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME).select().where(columns,value)
            return result[0]
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }

    }}