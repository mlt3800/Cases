import { GameUser } from "../models/GameUsersDTO";

export interface GameUsersRepository{
    singup (newUser: GameUser): Promise<void>
    getUser(column: string, value: string): Promise<GameUser | undefined>
}