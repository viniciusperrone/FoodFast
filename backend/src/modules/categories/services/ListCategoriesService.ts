import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import Category from '../infra/typeorm/entities/Category';

import ICategoriesRepository from '../repositories/ICategoriesRepository';

@injectable()
class ListCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(user_id: string): Promise<Category[]> {
    let categories = await this.cacheProvider.recover<Category[]>(
      `categories-list:${user_id}`,
    );

    if (!categories) {
      categories = await this.categoriesRepository.findAllCategories();

      await this.cacheProvider.save(
        `categories-list:${user_id}`,
        classToClass(categories),
      );
    }

    return categories;
  }
}

export default ListCategoriesService;
