import { Router } from "express";
import { CreateUsersController } from "../modules/users/services/CreateUsers/CreateUsersController";

export const routes = Router()

routes.post('/users', new CreateUsersController().handle)