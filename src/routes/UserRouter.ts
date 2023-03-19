import express from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { IdGenerator } from '../services/Idgenerator'
import { HashManager } from '../services/HashManager'
import { Authenticator } from '../services/Authenticator'
import { UserBusiness } from '../business/Userbusiness'
import { UserController } from '../controller/UserController'
export const userRouter = express.Router()
const userDatabase = new UserDataBase()
const userBusiness = new UserBusiness(userDatabase, new IdGenerator(), new HashManager(), new Authenticator )
const userController = new UserController(userBusiness )

userRouter.post("/signup", (req, res) => userController.signup(req, res))
userRouter.post("/login", (req, res) => userController.login(req, res))