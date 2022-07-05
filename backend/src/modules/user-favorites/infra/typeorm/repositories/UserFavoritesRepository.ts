import { Repository } from 'typeorm';
import { dataSource } from '@shared/infra/typeorm/database';

import IUserFavoritesRepository from '@modules/user-favorites/repositories/IUserFavoritesRepository';

import ICreateUserFavoriteDTO from '@modules/user-favorites/dtos/ICreateUserFavoriteDTO';

import UserFavorite from '../entities/UserFavorite';

class UserFavoritesRepository implements IUserFavoritesRepository {
  private databaseRepository: Repository<UserFavorite>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(UserFavorite);
  }

  public async findAllByUserId(user_id: string): Promise<UserFavorite[]> {
    const findUserFavorites = await this.databaseRepository.find({
      where: { user_id },
    });

    return findUserFavorites;
  }

  public async findByUserAndRecipeId(
    user_id: string,
    recipe_id: string,
  ): Promise<UserFavorite | null> {
    const findUserFavorite = await this.databaseRepository.findOne({
      where: { user_id, recipe_id },
    });

    return findUserFavorite;
  }

  public async findById(id: string): Promise<UserFavorite | null> {
    const findUserFavorite = await this.databaseRepository.findOne({
      where: { id },
    });

    return findUserFavorite;
  }

  public async create({
    user_id,
    recipe_id,
  }: ICreateUserFavoriteDTO): Promise<UserFavorite> {
    const userFavorite = this.databaseRepository.create({ user_id, recipe_id });

    await this.databaseRepository.save(userFavorite);

    return userFavorite;
  }

  public async remove(userFavorite: UserFavorite): Promise<void> {
    await this.databaseRepository.remove(userFavorite);
  }

  public async removeAllByRecipeId(recipe_id: string): Promise<void> {
    const findUserFavorites = await this.databaseRepository.find({
      where: { recipe_id },
    });

    await this.databaseRepository.remove(findUserFavorites);
  }
}

export default UserFavoritesRepository;
