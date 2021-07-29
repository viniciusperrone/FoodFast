import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import FakeRecipesRepository from '@modules/recipes/repositories/fakes/FakeRecipesRepository';
import FakeUserFavoritesRepository from '../repositories/fakes/FakeUserFavoritesRepository';

import CreateUserFavoriteService from './CreateUserFavoriteService';

let fakeCacheProvider: FakeCacheProvider;

let fakeUsersRepository: FakeUsersRepository;
let fakeCategoriesRepository: FakeCategoriesRepository;
let fakeRecipesRepository: FakeRecipesRepository;
let fakeUserFavoritesRepository: FakeUserFavoritesRepository;

let createUserFavorite: CreateUserFavoriteService;

describe('CreateUserFavorite', () => {
  beforeEach(() => {
    fakeCacheProvider = new FakeCacheProvider();

    fakeUsersRepository = new FakeUsersRepository();
    fakeCategoriesRepository = new FakeCategoriesRepository();
    fakeRecipesRepository = new FakeRecipesRepository();
    fakeUserFavoritesRepository = new FakeUserFavoritesRepository();

    createUserFavorite = new CreateUserFavoriteService(
      fakeRecipesRepository,
      fakeUserFavoritesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new user favorite', async () => {
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

    const userFavorite = await createUserFavorite.execute({
      user_id: user.id,
      recipe_id: recipe.id,
    });

    expect(userFavorite).toHaveProperty('id');
  });

  it('should not be able to create a new user favorite with a non existing recipe', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      createUserFavorite.execute({
        user_id: user.id,
        recipe_id: 'non existing recipe id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new user favorite in the same recipe of the same user', async () => {
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

    await createUserFavorite.execute({
      user_id: user.id,
      recipe_id: recipe.id,
    });

    await expect(
      createUserFavorite.execute({
        user_id: user.id,
        recipe_id: recipe.id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
