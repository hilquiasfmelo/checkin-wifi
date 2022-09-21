import { Request, Response } from 'express';
import { CreateUsersService } from './CreateUsersService';

export class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { fullname, nickname, cpf, isAdv, oab, state } = request.body;

    const createUsersService = new CreateUsersService();

    const user = await createUsersService.execute({
      fullname,
      nickname,
      cpf,
      isAdv,
      oab,
      state
    });

    return response.status(201).json(user)
  }
}
