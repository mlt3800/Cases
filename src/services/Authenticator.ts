import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import { Unauthorized } from "../error/CustomError"
import { AuthenticationData } from "../models/AuthenticatorData"
import { TokenData } from "../models/TokenData"


dotenv.config()

export class Authenticator implements TokenData {
    public generateToken = ({id, role}: AuthenticationData): string => {
        const token = jwt.sign(
            {id, role},
            process.env.JWT_KEY as string,
            {expiresIn: "1h"}
        )

        return token
    }

    public getTokenData = (token: string): AuthenticationData => {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
            return {id: payload.id, role: payload.role}
        } catch (err: any) {
            throw new Unauthorized()
        }
    }
}