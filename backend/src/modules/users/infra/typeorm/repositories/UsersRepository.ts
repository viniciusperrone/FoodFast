import { Repository } from 'typeorm';
import { dataSource } from '@shared/infra/typeorm/database';
import { v4 as uuid } from 'uuid';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private databaseRepository: Repository<User>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(User);
  }

  public async findById(id: string): Promise<User | null> {
    const findUser = await this.databaseRepository.findOne({ where: { id } });

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const findUser = await this.databaseRepository.findOne({
      where: { email },
    });

    return findUser;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.databaseRepository.create(userData);

    Object.assign(user, { id: uuid() });

    await this.databaseRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.databaseRepository.save(user);
  }
}

export default UsersRepository;
