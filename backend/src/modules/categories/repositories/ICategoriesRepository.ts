import Category from '../infra/typeorm/entities/Category';

import ICreateCategoryDTO from '../dtos/ICreateOrUpdateCategoryDTO';

export default interface ICategoriesRepository {
  findAllCategories(): Promise<Category[]>;
  findByName(name: string): Promise<Category | null>;
  findById(id: string): Promise<Category | null>;
  create(data: ICreateCategoryDTO): Promise<Category>;
  save(category: Category): Promise<Category>;
  remove(category: Category): Promise<void>;
}
