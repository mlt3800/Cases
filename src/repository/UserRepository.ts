import { GameUser } from "../models/GameUsersDTO";

export interface GameUsersRepository{
    signup(newUser: GameUser): Promise<void>
    getUser(column: string, value: string): Promise<GameUser | undefined>
}