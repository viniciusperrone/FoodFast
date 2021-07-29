import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import IRecipesRepository from '../repositories/IRecipesRepository';

import Recipe from '../infra/typeorm/entities/Recipe';
import ICreateRecipeDTO from '../dtos/ICreateOrUpdateRecipeDTO';

@injectable()
class CreateRecipeService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,

    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    category_id,
    name,
    description,
    ingredients,
    steps,
    video_url,
  }: ICreateRecipeDTO): Promise<Recipe> {
    const checkCategoryExists = await this.categoriesRepository.findById(
      category_id,
    );

    if (!checkCategoryExists) {
      throw new AppError('Category does not existis.');
    }

    const checkRecipeExists = await this.recipesRepository.findByName(name);

    if (checkRecipeExists) {
      throw new AppError('Recipe name already in use.');
    }

    const recipe = await this.recipesRepository.create({
      category_id,
      name,
      description,
      ingredients,
      steps,
      video_url,
    });

    this.cacheProvider.invalidatePrefix('filtered-recipes-list');
    this.cacheProvider.invalidatePrefix('recipes-list');

    return recipe;
  }
}

export default CreateRecipeService;
