import { Repository } from 'typeorm';
import { dataSource } from '@shared/infra/typeorm/database';
import { v4 as uuid } from 'uuid';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';

import ICreateCategoryDTO from '@modules/categories/dtos/ICreateOrUpdateCategoryDTO';

import Category from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private dataBaseRepository: Repository<Category>;

  constructor() {
    this.dataBaseRepository = dataSource.getRepository(Category);
  }

  public async findAllCategories(): Promise<Category[]> {
    const findCategories = await this.dataBaseRepository.find();

    return findCategories;
  }

  public async findByName(name: string): Promise<Category | null> {
    const findCategory = await this.dataBaseRepository.findOne({
      where: {
        name,
      },
    });

    return findCategory;
  }

  public async findById(id: string): Promise<Category | null> {
    const findCategory = await this.dataBaseRepository.findOne({
      where: { id },
    });

    return findCategory;
  }

  public async create(categoryData: ICreateCategoryDTO): Promise<Category> {
    const category = this.dataBaseRepository.create(categoryData);

    Object.assign(category, { id: uuid() });

    await this.dataBaseRepository.save(category);

    return category;
  }

  public async save(category: Category): Promise<Category> {
    return this.dataBaseRepository.save(category);
  }

  public async remove(category: Category): Promise<void> {
    await this.dataBaseRepository.remove(category);
  }
}

export default CategoriesRepository;
