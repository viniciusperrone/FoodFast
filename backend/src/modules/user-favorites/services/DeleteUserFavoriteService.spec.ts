import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import FakeRecipesRepository from '@modules/recipes/repositories/fakes/FakeRecipesRepository';
import FakeUserFavoritesRepository from '../repositories/fakes/FakeUserFavoritesRepository';

import DeleteUserFavoriteService from './DeleteUserFavoriteService';

let fakeCacheProvider: FakeCacheProvider;

let fakeUsersRepository: FakeUsersRepository;
let fakeCategoriesRepository: FakeCategoriesRepository;
let fakeRecipesRepository: FakeRecipesRepository;
let fakeUserFavoritesRepository: FakeUserFavoritesRepository;

let deleteUserFavorite: DeleteUserFavoriteService;

describe('DeleteUserRecipe', () => {
  beforeEach(() => {
    fakeCacheProvider = new FakeCacheProvider();

    fakeUsersRepository = new FakeUsersRepository();
    fakeCategoriesRepository = new FakeCategoriesRepository();
    fakeRecipesRepository = new FakeRecipesRepository();
    fakeUserFavoritesRepository = new FakeUserFavoritesRepository();

    deleteUserFavorite = new DeleteUserFavoriteService(
      fakeUserFavoritesRepository,
      fakeCacheProvider,
    );
  });

  it('should not be able to delete a non existing user favorite', async () => {
    await expect(
      deleteUserFavorite.execute('Non existing user favorite id'),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete an user favorite', async () => {
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

    const userFavorite = await fakeUserFavoritesRepository.create({
      user_id: user.id,
      recipe_id: recipe.id,
    });

    await deleteUserFavorite.execute(userFavorite.id);

    expect(await fakeUserFavoritesRepository.findById(userFavorite.id)).toBe(
      undefined,
    );
  });
});
