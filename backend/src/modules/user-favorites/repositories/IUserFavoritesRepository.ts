import ICreateUserFavoriteDTO from '../dtos/ICreateUserFavoriteDTO';

import UserFavorite from '../infra/typeorm/schemas/UserFavorite';

export default interface IUserFavoritesRepository {
  findAllByUserId(user_id: string): Promise<UserFavorite[]>;
  findByUserAndRecipeId(
    user_id: string,
    recipe_id: string,
  ): Promise<UserFavorite | undefined>;
  findById(id: string): Promise<UserFavorite | undefined>;
  create(data: ICreateUserFavoriteDTO): Promise<UserFavorite>;
  remove(userFavorite: UserFavorite): Promise<void>;
  removeAllByRecipeId(recipe_id: string): Promise<void>;
}
