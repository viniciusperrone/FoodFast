import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import FakeRecipesRepository from '../repositories/fakes/FakeRecipesRepository';

import UpdateRecipeImageService from './UpdateRecipeImageService';

let fakeCategoriesRepository: FakeCategoriesRepository;
let fakeRecipesRepository: FakeRecipesRepository;

let fakeCacheProvider: FakeCacheProvider;
let fakeStorageProvider: FakeStorageProvider;

let updateRecipeImageService: UpdateRecipeImageService;

describe('UpdateRecipeImage', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();
    fakeRecipesRepository = new FakeRecipesRepository();

    fakeCacheProvider = new FakeCacheProvider();
    fakeStorageProvider = new FakeStorageProvider();

    updateRecipeImageService = new UpdateRecipeImageService(
      fakeRecipesRepository,
      fakeStorageProvider,
      fakeCacheProvider,
    );
  });

  it('should be able to update the recipe with an image', async () => {
    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    const recipe = await fakeRecipesRepository.create({
      category_id: category.id,
      name: 'Recipe 01',
      description: 'Recipe description',
      steps: 'Recipe steps',
      ingredients: 'Recipe ingredients',
      video_url: 'Recipe video URL',
    });

    await updateRecipeImageService.execute({
      recipe_id: recipe.id,
      imageFilename: 'image.jpg',
    });

    await updateRecipeImageService.execute({
      recipe_id: recipe.id,
      imageFilename: 'image2.jpg',
    });

    expect(recipe.image).toBe('image2.jpg');
  });

  it('should not be able to update the image from non existing recipe', async () => {
    await expect(
      updateRecipeImageService.execute({
        recipe_id: 'non existing recipe id',
        imageFilename: 'image.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
