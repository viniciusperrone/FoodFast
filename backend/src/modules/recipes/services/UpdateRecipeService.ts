import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import IRecipesRepository from '../repositories/IRecipesRepository';

import Recipe from '../infra/typeorm/entities/Recipe';
import ICreateRecipeDTO from '../dtos/ICreateOrUpdateRecipeDTO';

interface IRequest extends ICreateRecipeDTO {
  id: string;
}

@injectable()
class UpdateRecipeService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,

    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    id,
    category_id,
    name,
    description,
    ingredients,
    steps,
    video_url,
  }: IRequest): Promise<Recipe> {
    const recipe = await this.recipesRepository.findById(id);

    if (!recipe) {
      throw new AppError('Recipe not found.');
    }

    const checkCategoryExists = await this.categoriesRepository.findById(
      category_id,
    );

    if (!checkCategoryExists) {
      throw new AppError('Category does not exists.');
    }

    const checkRecipeExists = await this.recipesRepository.findByName(name);

    if (checkRecipeExists && checkRecipeExists.id !== id) {
      throw new AppError('Recipe name already in use.');
    }

    recipe.category_id = category_id;
    recipe.name = name;
    recipe.description = description;
    recipe.ingredients = ingredients;
    recipe.steps = steps;
    recipe.video_url = video_url;

    this.cacheProvider.invalidatePrefix('filtered-recipes-list');
    this.cacheProvider.invalidatePrefix('recipes-list');

    return this.recipesRepository.save(recipe);
  }
}

export default UpdateRecipeService;
