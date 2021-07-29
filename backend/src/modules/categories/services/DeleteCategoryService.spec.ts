import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeCategoriesRepository from '../repositories/fakes/FakeCategoriesRepository';

import DeleteCategoryService from './DeleteCategoryService';

let fakeCacheProvider: FakeCacheProvider;

let fakeCategoriesRepository: FakeCategoriesRepository;

let deleteCategory: DeleteCategoryService;

describe('DeleteCategory', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();

    fakeCacheProvider = new FakeCacheProvider();

    deleteCategory = new DeleteCategoryService(
      fakeCategoriesRepository,
      fakeCacheProvider,
    );
  });

  it('should not be able to delete a non existing category', async () => {
    await expect(
      deleteCategory.execute('Non existing category id'),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete a category', async () => {
    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    await deleteCategory.execute(category.id);

    expect(await fakeCategoriesRepository.findById(category.id)).toBe(
      undefined,
    );
  });
});
