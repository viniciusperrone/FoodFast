import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import ICategoriesRepository from '../repositories/ICategoriesRepository';

import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateOrUpdateCategoryDTO';

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ name }: ICreateCategoryDTO): Promise<Category> {
    const checkCategoryExists = await this.categoriesRepository.findByName(
      name,
    );

    if (checkCategoryExists) {
      throw new AppError('Category name already in use.');
    }

    const category = await this.categoriesRepository.create({
      name,
    });

    this.cacheProvider.invalidatePrefix('categories-list');

    return category;
  }
}

export default CreateCategoryService;
