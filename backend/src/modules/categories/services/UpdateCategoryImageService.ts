import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import ICategoriesRepository from '../repositories/ICategoriesRepository';

import Category from '../infra/typeorm/entities/Category';

interface IRequest {
  category_id: string;
  imageFilename: string;
}

@injectable()
class UpdateCategoryImageService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    category_id,
    imageFilename,
  }: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.findById(category_id);

    if (!category) {
      throw new AppError('Category not found.');
    }

    if (category.image) {
      await this.storageProvider.deleteFile(category.image);
    }

    const fileName = await this.storageProvider.saveFile(imageFilename);

    category.image = fileName;

    await this.categoriesRepository.save(category);

    this.cacheProvider.invalidatePrefix('categories-list');

    return category;
  }
}

export default UpdateCategoryImageService;
