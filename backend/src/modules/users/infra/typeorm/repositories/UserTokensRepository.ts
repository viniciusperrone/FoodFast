import { Repository } from 'typeorm';
import { dataSource } from '@shared/infra/typeorm/database';
import { v4 as uuid } from 'uuid';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UserToken from '../entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private databaseRepository: Repository<UserToken>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(UserToken);
  }

  public async findByToken(token: string): Promise<UserToken | null> {
    const userToken = await this.databaseRepository.findOne({
      where: { token },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = this.databaseRepository.create({
      user_id,
    });

    Object.assign(userToken, { id: uuid(), token: uuid() });

    await this.databaseRepository.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
