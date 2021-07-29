import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import Recipe from '../infra/typeorm/entities/Recipe';

import IRecipesRepository from '../repositories/IRecipesRepository';

@injectable()
class ListFilteredRecipesService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(
    page: number,
    category_id: string,
    user_id: string,
  ): Promise<Recipe[]> {
    let recipes = await this.cacheProvider.recover<Recipe[]>(
      `filtered-recipes-list:${user_id}:page=${page}:category=${category_id}`,
    );

    if (!recipes) {
      recipes = await this.recipesRepository.findAllRecipesByCategoryId(
        page,
        category_id,
      );

      const recipesLastPage = await this.cacheProvider.recover<Recipe[]>(
        `filtered-recipes-list:${user_id}:page=${
          page - 1
        }:category=${category_id}`,
      );

      if (recipesLastPage) {
        recipes = recipesLastPage.concat(recipes);
      } else if (page > 1) {
        return [];
      }

      await this.cacheProvider.save(
        `filtered-recipes-list:${user_id}:page=${page}:category=${category_id}`,
        classToClass(recipes),
      );
    }

    return recipes;
  }
}

export default ListFilteredRecipesService;
