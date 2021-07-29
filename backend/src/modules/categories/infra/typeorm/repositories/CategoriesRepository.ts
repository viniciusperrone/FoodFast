import { getRepository, Repository } from 'typeorm';
import { v4 } from 'uuid';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';

import ICreateCategoryDTO from '@modules/categories/dtos/ICreateOrUpdateCategoryDTO';

import Category from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findAllCategories(): Promise<Category[]> {
    const findCategories = await this.ormRepository.find();

    return findCategories;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const findCategory = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return findCategory;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const findCategory = await this.ormRepository.findOne(id);

    return findCategory;
  }

  public async create(categoryData: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create(categoryData);

    Object.assign(category, { id: v4() });

    await this.ormRepository.save(category);

    return category;
  }

  public async save(category: Category): Promise<Category> {
    return this.ormRepository.save(category);
  }

  public async remove(category: Category): Promise<void> {
    await this.ormRepository.remove(category);
  }
}

export default CategoriesRepository;
