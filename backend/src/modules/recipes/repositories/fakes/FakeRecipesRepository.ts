import { v4 } from 'uuid';

import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';

import ICreateRecipeDTO from '@modules/recipes/dtos/ICreateOrUpdateRecipeDTO';

import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';

export default class FakeRecipesRepository implements IRecipesRepository {
  private recipes: Recipe[] = [];

  public async findAllRecipesByCategoryId(
    page: number,
    category_id: string,
  ): Promise<Recipe[]> {
    return this.recipes
      .filter(recipe => recipe.category_id === category_id)
      .slice((page - 1) * 10)
      .slice(0, 10);
  }

  public async findAllRecipes(search: string, page: number): Promise<Recipe[]> {
    const recipes = !search
      ? this.recipes
      : this.recipes.filter(recipe => recipe.name.includes(search));

    return recipes.slice((page - 1) * 10).slice(0, 10);
  }

  public async findByName(name: string): Promise<Recipe | undefined> {
    const recipe = this.recipes.find(findRecipe => findRecipe.name === name);

    return recipe;
  }

  public async findById(id: string): Promise<Recipe | undefined> {
    const recipe = this.recipes.find(findRecipe => findRecipe.id === id);

    return recipe;
  }

  public async create(recipeData: ICreateRecipeDTO): Promise<Recipe> {
    const recipe = new Recipe();

    Object.assign(recipe, { id: v4() }, recipeData);

    this.recipes.push(recipe);

    return recipe;
  }

  public async save(recipe: Recipe): Promise<Recipe> {
    const findIndex = this.recipes.findIndex(
      findRecipe => findRecipe.id === module.id,
    );

    this.recipes[findIndex] = recipe;

    return recipe;
  }

  public async remove(recipe: Recipe): Promise<void> {
    const findIndex = this.recipes.findIndex(
      findRecipe => findRecipe.id === recipe.id,
    );

    this.recipes.splice(findIndex, 1);
  }
}
