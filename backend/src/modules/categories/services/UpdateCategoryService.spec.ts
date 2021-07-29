import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeCategoriesRepository from '../repositories/fakes/FakeCategoriesRepository';

import UpdateCategoryService from './UpdateCategoryService';

let fakeCacheProvider: FakeCacheProvider;

let fakeCategoriesRepository: FakeCategoriesRepository;

let updateCategory: UpdateCategoryService;

describe('UpdateCategory', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();

    fakeCacheProvider = new FakeCacheProvider();

    updateCategory = new UpdateCategoryService(
      fakeCategoriesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to update the category', async () => {
    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    const updatedCategory = await updateCategory.execute({
      id: category.id,
      name: 'New category 01',
    });

    expect(updatedCategory.name).toBe('New category 01');
  });

  it('should not be able to update from a non existing category', async () => {
    await expect(
      updateCategory.execute({
        id: 'non existing category id',
        name: 'Category 01',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the category with the same name of another', async () => {
    await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    const category = await fakeCategoriesRepository.create({
      name: 'Category 02',
    });

    await expect(
      updateCategory.execute({
        id: category.id,
        name: 'Category 01',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
