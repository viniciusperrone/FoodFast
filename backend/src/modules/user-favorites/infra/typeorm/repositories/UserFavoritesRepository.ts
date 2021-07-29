import { getMongoRepository, MongoRepository } from 'typeorm';

import IUserFavoritesRepository from '@modules/user-favorites/repositories/IUserFavoritesRepository';

import ICreateUserFavoriteDTO from '@modules/user-favorites/dtos/ICreateUserFavoriteDTO';

import UserFavorite from '../schemas/UserFavorite';

class UserFavoritesRepository implements IUserFavoritesRepository {
  private ormRepository: MongoRepository<UserFavorite>;

  constructor() {
    this.ormRepository = getMongoRepository(UserFavorite, 'mongo');
  }

  public async findAllByUserId(user_id: string): Promise<UserFavorite[]> {
    const findUserFavorites = await this.ormRepository.find({
      where: { user_id },
    });

    return findUserFavorites;
  }

  public async findByUserAndRecipeId(
    user_id: string,
    recipe_id: string,
  ): Promise<UserFavorite | undefined> {
    const findUserFavorite = await this.ormRepository.findOne({
      where: { user_id, recipe_id },
    });

    return findUserFavorite;
  }

  public async findById(id: string): Promise<UserFavorite | undefined> {
    const findUserFavorite = await this.ormRepository.findOne(id);

    return findUserFavorite;
  }

  public async create({
    user_id,
    recipe_id,
  }: ICreateUserFavoriteDTO): Promise<UserFavorite> {
    const userFavorite = this.ormRepository.create({ user_id, recipe_id });

    await this.ormRepository.save(userFavorite);

    return userFavorite;
  }

  public async remove(userFavorite: UserFavorite): Promise<void> {
    await this.ormRepository.remove(userFavorite);
  }

  public async removeAllByRecipeId(recipe_id: string): Promise<void> {
    const findUserFavorites = await this.ormRepository.find({
      where: { recipe_id },
    });

    await this.ormRepository.remove(findUserFavorites);
  }
}

export default UserFavoritesRepository;
