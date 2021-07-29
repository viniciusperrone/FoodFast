import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import ICategoriesRepository from '../repositories/ICategoriesRepository';

import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateOrUpdateCategoryDTO';

interface IRequest extends ICreateCategoryDTO {
  id: string;
}

@injectable()
class UpdateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id, name }: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError('Category not found.');
    }

    const checkCategoryExists = await this.categoriesRepository.findByName(
      name,
    );

    if (checkCategoryExists && checkCategoryExists.id !== id) {
      throw new AppError('Category name already in use.');
    }

    category.name = name;

    this.cacheProvider.invalidatePrefix('categories-list');

    return this.categoriesRepository.save(category);
  }
}

export default UpdateCategoryService;
