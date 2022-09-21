import { Users } from '@prisma/client';
import { prisma } from '../../../../shared/databases/prisma';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUsersDTO } from '../../dtos/ICreateUsersDTO';

export class CreateUsersService {
  async execute({
    fullname,
    nickname,
    cpf,
    isAdv,
    oab,
    state,
  }: ICreateUsersDTO): Promise<Users> {
    const userExists = await prisma.users.findFirst({
      where: {
        cpf: {
          equals: cpf,
        },
      },
    });

    const advExists = await prisma.users.findFirst({
      where: {
        oab: {
          equals: oab,
        },
      },
    });

    if (userExists || advExists) {
      throw new AppError('User already exists');
    }

    const user = await prisma.users.create({
      data: {
        fullname,
        nickname,
        cpf,
        isAdv,
        oab,
        state,
      },
    });

    return user;
  }
}
