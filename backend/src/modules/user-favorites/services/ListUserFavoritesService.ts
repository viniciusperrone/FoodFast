import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';

import UserFavorite from '../infra/typeorm/entities/UserFavorite';
import IUserFavoritesRepository from '../repositories/IUserFavoritesRepository';

interface IUserFavoriteWithRecipe extends UserFavorite {
  recipe: Recipe;
}

@injectable()
class ListUserFavoritesService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,

    @inject('UserFavoritesRepository')
    private userFavoritesRepository: IUserFavoritesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async  execute(user_id: string): Promise<IUserFavoriteWithRecipe[]> {
    const userFavorites =
      (await this.cacheProvider.recover<IUserFavoriteWithRecipe[]>(
        `favorite-recipes-list:${user_id}`,
      )) || [];

    if (!userFavorites.length) {
      const auxUserFavorites = await this.userFavoritesRepository.findAllByUserId(
        user_id,
      );

      if (auxUserFavorites.length) {
        for (let i = 0; i < auxUserFavorites.length; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          const recipe = await this.recipesRepository.findById(
            auxUserFavorites[i].recipe_id,
          );

          if (recipe) {
            userFavorites.push({
              ...auxUserFavorites[i],
              recipe: classToClass(recipe),
            });
          }
        }

        await this.cacheProvider.save(
          `favorite-recipes-list:${user_id}`,
          userFavorites,
        );
      }
    }

    return userFavorites;
  }
}

export default ListUserFavoritesService;
