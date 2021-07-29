import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import FakeRecipesRepository from '../repositories/fakes/FakeRecipesRepository';

import CreateRecipeService from './CreateRecipeService';

let fakeCacheProvider: FakeCacheProvider;

let fakeCategoriesRepository: FakeCategoriesRepository;
let fakeRecipesRepository: FakeRecipesRepository;

let createRecipe: CreateRecipeService;

describe('CreateRecipe', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();
    fakeRecipesRepository = new FakeRecipesRepository();

    fakeCacheProvider = new FakeCacheProvider();

    createRecipe = new CreateRecipeService(
      fakeCategoriesRepository,
      fakeRecipesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new recipe', async () => {
    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    const recipe = await createRecipe.execute({
      category_id: category.id,
      name: 'Recipe 01',
      description: 'Recipe description',
      steps: 'Recipe steps',
      ingredients: 'Recipe ingredients',
      video_url: 'Recipe video URL',
    });

    expect(recipe).toHaveProperty('id');
  });

  it('should not be able to create a new recipe with the same name of another', async () => {
    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    await createRecipe.execute({
      category_id: category.id,
      name: 'Recipe 01',
      description: 'Recipe description',
      steps: 'Recipe steps',
      ingredients: 'Recipe ingredients',
      video_url: 'Recipe video URL',
    });

    await expect(
      createRecipe.execute({
        category_id: category.id,
        name: 'Recipe 01',
        description: 'Recipe description',
        steps: 'Recipe steps',
        ingredients: 'Recipe ingredients',
        video_url: 'Recipe video URL',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new recipe with a non existing category', async () => {
    await expect(
      createRecipe.execute({
        category_id: 'non existing category id',
        name: 'Recipe 01',
        description: 'Recipe description',
        steps: 'Recipe steps',
        ingredients: 'Recipe ingredients',
        video_url: 'Recipe video URL',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
