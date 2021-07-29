import { getRepository, Like, Repository } from 'typeorm';
import { v4 } from 'uuid';

import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';

import ICreateRecipeDTO from '@modules/recipes/dtos/ICreateOrUpdateRecipeDTO';

import Recipe from '../entities/Recipe';

class RecipesRepository implements IRecipesRepository {
  private ormRepository: Repository<Recipe>;

  constructor() {
    this.ormRepository = getRepository(Recipe);
  }

  public async findAllRecipesByCategoryId(
    page: number,
    category_id: string,
  ): Promise<Recipe[]> {
    const findRecipes = await this.ormRepository.find({
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
        ? await this.ormRepository.find({
            skip: (page - 1) * 10,
            take: 10,
            where: {
              name: Like(`%${search}%`),
            },
          })
        : await this.ormRepository.find({
            skip: (page - 1) * 10,
            take: 10,
          });

    return findRecipes;
  }

  public async findByName(name: string): Promise<Recipe | undefined> {
    const findRecipe = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return findRecipe;
  }

  public async findById(id: string): Promise<Recipe | undefined> {
    const findRecipe = await this.ormRepository.findOne(id);

    return findRecipe;
  }

  public async create(recipeData: ICreateRecipeDTO): Promise<Recipe> {
    const recipe = this.ormRepository.create(recipeData);

    Object.assign(recipe, { id: v4() });

    await this.ormRepository.save(recipe);

    return recipe;
  }

  public async save(recipe: Recipe): Promise<Recipe> {
    return this.ormRepository.save(recipe);
  }

  public async remove(recipe: Recipe): Promise<void> {
    await this.ormRepository.remove(recipe);
  }
}

export default RecipesRepository;
