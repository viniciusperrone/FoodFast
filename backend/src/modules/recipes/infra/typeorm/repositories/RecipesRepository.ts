import { Like, Repository } from 'typeorm';
import { dataSource } from '@shared/infra/typeorm/database';
import { v4 as uuid } from 'uuid';

import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';

import ICreateRecipeDTO from '@modules/recipes/dtos/ICreateOrUpdateRecipeDTO';

import Recipe from '../entities/Recipe';

class RecipesRepository implements IRecipesRepository {
  private databaseRepository: Repository<Recipe>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(Recipe);
  }

  public async findAllRecipesByCategoryId(
    page: number,
    category_id: string,
  ): Promise<Recipe[]> {
    const findRecipes = await this.databaseRepository.find({
      skip: (page - 1) * 10,
      take: 10,
      where: {
        category_id,
      },
    });

    return findRecipes;
  }

  public async findAllRecipes(search: string, page: number): Promise<Recipe[]> {
    const findRecipes =
      search !== ''
        ? await this.databaseRepository.find({
            skip: (page - 1) * 10,
            take: 10,
            where: {
              name: Like(`%${search}%`),
            },
          })
        : await this.databaseRepository.find({
            skip: (page - 1) * 10,
            take: 10,
          });

    return findRecipes;
  }

  public async findByName(name: string): Promise<Recipe | null> {
    const findRecipe = await this.databaseRepository.findOne({
      where: {
        name,
      },
    });

    return findRecipe;
  }

  public async findById(id: string): Promise<Recipe | null> {
    const findRecipe = await this.databaseRepository.findOne({ where: { id } });

    return findRecipe;
  }

  public async create(recipeData: ICreateRecipeDTO): Promise<Recipe> {
    const recipe = this.databaseRepository.create(recipeData);

    Object.assign(recipe, { id: uuid() });

    await this.databaseRepository.save(recipe);

    return recipe;
  }

  public async save(recipe: Recipe): Promise<Recipe> {
    return this.databaseRepository.save(recipe);
  }

  public async remove(recipe: Recipe): Promise<void> {
    await this.databaseRepository.remove(recipe);
  }
}

export default RecipesRepository;
