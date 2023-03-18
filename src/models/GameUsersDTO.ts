export enum UserCategory {
    GAMER = 'GAMER',
  HARDCORE = 'HARDCORE',
}

export class GameUser {
    constructor (
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly role: UserCategory,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;       
        this.role = role;   

    }
}
export interface inputSingupDTO {
name: string;
email: string;  
password: string;  
role: string 
} 

export interface inputLoginDTO{
    email: string;  
    password: string;
}