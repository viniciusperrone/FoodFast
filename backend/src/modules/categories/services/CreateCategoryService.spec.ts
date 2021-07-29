import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeCategoriesRepository from '../repositories/fakes/FakeCategoriesRepository';

import CreateCategoryService from './CreateCategoryService';

let fakeCacheProvider: FakeCacheProvider;

let fakeCategoriesRepository: FakeCategoriesRepository;

let createCategory: CreateCategoryService;

describe('CreateCategory', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();

    fakeCacheProvider = new FakeCacheProvider();

    createCategory = new CreateCategoryService(
      fakeCategoriesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new category', async () => {
    const category = await createCategory.execute({
      name: 'Category 01',
    });

    expect(category).toHaveProperty('id');
  });

  it('should not be able to create a new category with the same name of another', async () => {
    await createCategory.execute({
      name: 'Category 01',
    });

    await expect(
      createCategory.execute({
        name: 'Category 01',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
