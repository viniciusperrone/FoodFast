import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';
import IUserFavoritesRepository from '../repositories/IUserFavoritesRepository';

import UserFavorite from '../infra/typeorm/schemas/UserFavorite';
import ICreateUserFavoriteDTO from '../dtos/ICreateUserFavoriteDTO';

@injectable()
class CreateUserFavoriteService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,

    @inject('UserFavoritesRepository')
    private userFavoritesRepository: IUserFavoritesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    user_id,
    recipe_id,
  }: ICreateUserFavoriteDTO): Promise<UserFavorite> {
    const checkRecipeExists = await this.recipesRepository.findById(recipe_id);

    if (!checkRecipeExists) {
      throw new AppError('Recipe does not exists.');
    }

    const checkUserFavoriteExists = await this.userFavoritesRepository.findByUserAndRecipeId(
      user_id,
      recipe_id,
    );

    if (checkUserFavoriteExists) {
      throw new AppError('User favorite already exists.');
    }

    const userFavorite = await this.userFavoritesRepository.create({
      user_id,
      recipe_id,
    });

    this.cacheProvider.invalidatePrefix('favorite-recipes-list');

    return userFavorite;
  }
}

export default CreateUserFavoriteService;
