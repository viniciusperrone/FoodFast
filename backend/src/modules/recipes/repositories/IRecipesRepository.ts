import Recipe from '../infra/typeorm/entities/Recipe';

import ICreateRecipeDTO from '../dtos/ICreateOrUpdateRecipeDTO';

export default interface IRecipesRepository {
  findAllRecipesByCategoryId(
    page: number,
    category_id: string,
  ): Promise<Recipe[]>;
  findAllRecipes(search: string, page: number): Promise<Recipe[]>;
  findByName(name: string): Promise<Recipe | undefined>;
  findById(id: string): Promise<Recipe | undefined>;
  create(data: ICreateRecipeDTO): Promise<Recipe>;
  save(recipe: Recipe): Promise<Recipe>;
  remove(recipe: Recipe): Promise<void>;
}
