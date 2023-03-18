import { UserCategory } from "./GameUsersDTO"

export interface AuthenticationData {
    id: string,
    role: UserCategory
}