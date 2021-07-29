import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import FakeRecipesRepository from '../repositories/fakes/FakeRecipesRepository';

import UpdateRecipeService from './UpdateRecipeService';

let fakeCacheProvider: FakeCacheProvider;

let fakeCategoriesRepository: FakeCategoriesRepository;
let fakeRecipesRepository: FakeRecipesRepository;

let updateRecipe: UpdateRecipeService;

describe('UpdateRecipe', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();
    fakeRecipesRepository = new FakeRecipesRepository();

    fakeCacheProvider = new FakeCacheProvider();

    updateRecipe = new UpdateRecipeService(
      fakeCategoriesRepository,
      fakeRecipesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to update the recipe', async () => {
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

    const updatedRecipe = await updateRecipe.execute({
      id: recipe.id,
      category_id: category.id,
      name: 'New recipe 01',
      description: 'New recipe description',
      steps: 'New recipe steps',
      ingredients: 'New recipe ingredients',
      video_url: 'New recipe video URL',
    });

    expect(updatedRecipe.name).toBe('New recipe 01');
    expect(updatedRecipe.description).toBe('New recipe description');
    expect(updatedRecipe.steps).toBe('New recipe steps');
    expect(updatedRecipe.ingredients).toBe('New recipe ingredients');
    expect(updatedRecipe.video_url).toBe('New recipe video URL');
  });

  it('should not be able to update from a non existing recipe', async () => {
    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    await expect(
      updateRecipe.execute({
        id: 'non existing recipe id',
        category_id: category.id,
        name: 'New recipe 01',
        description: 'New recipe description',
        steps: 'New recipe steps',
        ingredients: 'New recipe ingredients',
        video_url: 'New recipe video URL',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the recipe with the same name of another', async () => {
    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    await fakeRecipesRepository.create({
      category_id: category.id,
      name: 'Recipe 01',
      description: 'Recipe description',
      steps: 'Recipe steps',
      ingredients: 'Recipe ingredients',
      video_url: 'Recipe video URL',
    });

    const recipe = await fakeRecipesRepository.create({
      category_id: category.id,
      name: 'Recipe 02',
      description: 'Recipe 02 description',
      steps: 'Recipe 02 steps',
      ingredients: 'Recipe 02 ingredients',
      video_url: 'Recipe 02 video URL',
    });

    await expect(
      updateRecipe.execute({
        id: recipe.id,
        category_id: category.id,
        name: 'Recipe 01',
        description: 'New recipe 01 description',
        steps: 'New recipe 01 steps',
        ingredients: 'New recipe 01 ingredients',
        video_url: 'New recipe 01 video URL',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a recipe with a non existing category', async () => {
    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    const recipe = await fakeRecipesRepository.create({
      category_id: category.id,
      name: 'Recipe 01',
      description: 'Recipe 01 description',
      steps: 'Recipe 01 steps',
      ingredients: 'Recipe 01 ingredients',
      video_url: 'Recipe 01 video URL',
    });

    await expect(
      updateRecipe.execute({
        id: recipe.id,
        category_id: 'non exiting category id',
        name: 'Recipe 01',
        description: 'New recipe 01 description',
        steps: 'New recipe 01 steps',
        ingredients: 'New recipe 01 ingredients',
        video_url: 'New recipe 01 video URL',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
