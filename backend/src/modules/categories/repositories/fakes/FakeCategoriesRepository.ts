import { v4 } from 'uuid';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';

import ICreateCategoryDTO from '@modules/categories/dtos/ICreateOrUpdateCategoryDTO';

import Category from '@modules/categories/infra/typeorm/entities/Category';

export default class FakeCategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  public async findAllCategories(): Promise<Category[]> {
    return this.categories;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find(
      findCategory => findCategory.name === name,
    );

    return category;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = this.categories.find(
      findCategory => findCategory.id === id,
    );

    return category;
  }

  public async create(categoryData: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, { id: v4() }, categoryData);

    this.categories.push(category);

    return category;
  }

  public async save(category: Category): Promise<Category> {
    const findIndex = this.categories.findIndex(
      findCategory => findCategory.id === module.id,
    );

    this.categories[findIndex] = category;

    return category;
  }

  public async remove(category: Category): Promise<void> {
    const findIndex = this.categories.findIndex(
      findCategory => findCategory.id === category.id,
    );

    this.categories.splice(findIndex, 1);
  }
}
