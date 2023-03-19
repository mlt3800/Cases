import { GameDTO } from "../models/GamesDTO";

export interface GamesRepository {
    createGame(newGame:GameDTO): Promise<void>;
    getGames(columns:string, value:string): Promise<GameDTO | undefined>;
}