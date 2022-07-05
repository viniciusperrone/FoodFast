import { ObjectID } from 'mongodb';

import IUserFavoritesRepository from '@modules/user-favorites/repositories/IUserFavoritesRepository';

import ICreateUserFavoriteDTO from '@modules/user-favorites/dtos/ICreateUserFavoriteDTO';

import UserFavorite from '../../infra/typeorm/entities/UserFavorite';

export default class FakeUserFavoritesRepository
  implements IUserFavoritesRepository {
  private userFavorites: UserFavorite[] = [];

  public async findAllByUserId(user_id: string): Promise<UserFavorite[]> {
    const userFavorites = this.userFavorites.filter(
      findUserFavorite => findUserFavorite.user_id === user_id,
    );

    return userFavorites;
  }

  public async findByUserAndRecipeId(
    user_id: string,
    recipe_id: string,
  ): Promise<UserFavorite | undefined> {
    const userFavorite = this.userFavorites.find(
      findUserFavorite =>
        findUserFavorite.user_id === user_id &&
        findUserFavorite.recipe_id === recipe_id,
    );

    return userFavorite;
  }

  public async findById(id: string): Promise<UserFavorite | undefined> {
    const userFavorite = this.userFavorites.find(
      findUserFavorite => findUserFavorite.id === id,
    );

    return userFavorite;
  }

  public async create({
    user_id,
    recipe_id,
  }: ICreateUserFavoriteDTO): Promise<UserFavorite> {
    const userConquest = new UserFavorite();

    Object.assign(userConquest, {
      id: new ObjectID(),
      user_id,
      recipe_id,
    });

    this.userFavorites.push(userConquest);

    return userConquest;
  }

  public async remove(userConquest: UserFavorite): Promise<void> {
    const findIndex = this.userFavorites.findIndex(
      findUserFavorite => findUserFavorite.id === userConquest.id,
    );

    this.userFavorites.splice(findIndex, 1);
  }

  public async removeAllByRecipeId(recipe_id: string): Promise<void> {
    const userFavorites = this.userFavorites.filter(
      findUserFavorite => findUserFavorite.recipe_id === recipe_id,
    );

    for (let i = 0; i < userFavorites.length; i += 1) {
      const findIndex = this.userFavorites.findIndex(
        findUserFavorite => findUserFavorite.id === userFavorites[i].id,
      );

      this.userFavorites.splice(findIndex, 1);
    }
  }
}
