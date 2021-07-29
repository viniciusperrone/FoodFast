import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import Recipe from '../infra/typeorm/entities/Recipe';

import IRecipesRepository from '../repositories/IRecipesRepository';

@injectable()
class ListRecipesService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(
    search: string,
    page: number,
    user_id: string,
  ): Promise<Recipe[]> {
    let recipes = await this.cacheProvider.recover<Recipe[]>(
      `recipes-list:${user_id}:page=${page}:search=${search}`,
    );

    if (!recipes) {
      recipes = await this.recipesRepository.findAllRecipes(search, page);

      const recipesLastPage = await this.cacheProvider.recover<Recipe[]>(
        `recipes-list:${user_id}:page=${page - 1}:search=${search}`,
      );

      if (recipesLastPage) {
        recipes = recipesLastPage.concat(recipes);
      } else if (page > 1) {
        return [];
      } else {
        this.cacheProvider.invalidatePrefix(`recipes-list:${user_id}`);
      }

      await this.cacheProvider.save(
        `recipes-list:${user_id}:page=${page}:search=${search}`,
        classToClass(recipes),
      );
    }

    return recipes;
  }
}

export default ListRecipesService;
