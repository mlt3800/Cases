export enum GameType {
    RPG = "RPG",
    ACTION = "ACTION",
    ADVENTURE = "ADVENTURE",
    HORROR = "HORROR",
    SPORTS = "SPORTS",
    FIGHTING = "FIGHTING",
    MOBILE = "MOBILE",
}
export class GameDTO {
    constructor (
        public readonly id: string,
        public readonly name: string,
        public readonly game_type: GameType,
        public readonly game_creator: string,
        public readonly game_description: string,
        public readonly game_price: number,
    ) {
        this.id = id;
        this.name = name;   
        this.game_type = game_type;
        this.game_creator = game_creator;
        this.game_description = game_description;
        this.game_price = game_price;

    }

}
export interface InputGameDTO {
    name: string;
    game_type: GameType;
    game_price: number;
    game_creator: string;
}

export interface inputGetGameDTO{
    id: string;
    name: string;
    game_creator: string;

}
