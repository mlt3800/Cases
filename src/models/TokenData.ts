import { AuthenticationData } from "./AuthenticatorData"


export interface TokenData {
    generateToken ({id, role}: AuthenticationData): string
    getTokenData (token: string): AuthenticationData
}