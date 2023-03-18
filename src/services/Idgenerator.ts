import { v4 } from "uuid"
import { IdGeneratorDTO } from "../models/IdgeneratorDTO"


export class IdGenerator implements IdGeneratorDTO {
    generateId (): string {
        return v4()
    }
}