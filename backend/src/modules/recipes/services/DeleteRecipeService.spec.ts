import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import FakeUserFavoritesRepository from '@modules/user-favorites/repositories/fakes/FakeUserFavoritesRepository';
import FakeRecipesRepository from '../repositories/fakes/FakeRecipesRepository';

import DeleteRecipeService from './DeleteRecipeService';

let fakeCacheProvider: FakeCacheProvider;

let fakeUsersRepository: FakeUsersRepository;
let fakeCategoriesRepository: FakeCategoriesRepository;
let fakeUserFavoritesRepository: FakeUserFavoritesRepository;
let fakeRecipesRepository: FakeRecipesRepository;

let deleteRecipe: DeleteRecipeService;

describe('DeleteRecipe', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCategoriesRepository = new FakeCategoriesRepository();
    fakeUserFavoritesRepository = new FakeUserFavoritesRepository();
    fakeRecipesRepository = new FakeRecipesRepository();

    fakeCacheProvider = new FakeCacheProvider();

    deleteRecipe = new DeleteRecipeService(
      fakeUserFavoritesRepository,
      fakeRecipesRepository,
      fakeCacheProvider,
    );
  });

  it('should not be able to delete a non existing recipe', async () => {
    await expect(
      deleteRecipe.execute('Non existing recipe id'),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete a recipe', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

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

    await fakeUserFavoritesRepository.create({
      user_id: user.id,
      recipe_id: recipe.id,
    });

    await deleteRecipe.execute(recipe.id);

    expect(await fakeRecipesRepository.findById(recipe.id)).toBe(undefined);

    expect(
      await fakeUserFavoritesRepository.findByUserAndRecipeId(
        user.id,
        recipe.id,
      ),
    ).toBe(undefined);
  });
});
