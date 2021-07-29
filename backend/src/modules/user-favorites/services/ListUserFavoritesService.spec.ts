import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import FakeRecipesRepository from '@modules/recipes/repositories/fakes/FakeRecipesRepository';
import FakeUserFavoritesRepository from '../repositories/fakes/FakeUserFavoritesRepository';

import ListUserFavoritesService from './ListUserFavoritesService';

let fakeCacheProvider: FakeCacheProvider;

let fakeUsersRepository: FakeUsersRepository;
let fakeCategoriesRepository: FakeCategoriesRepository;
let fakeRecipesRepository: FakeRecipesRepository;
let fakeUserFavoritesRepository: FakeUserFavoritesRepository;

let listUserFavorites: ListUserFavoritesService;

describe('ListUserFavorites', () => {
  beforeEach(() => {
    fakeCacheProvider = new FakeCacheProvider();

    fakeUsersRepository = new FakeUsersRepository();
    fakeCategoriesRepository = new FakeCategoriesRepository();
    fakeRecipesRepository = new FakeRecipesRepository();
    fakeUserFavoritesRepository = new FakeUserFavoritesRepository();

    listUserFavorites = new ListUserFavoritesService(
      fakeRecipesRepository,
      fakeUserFavoritesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list the user favorites', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const category = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    const firstRecipe = await fakeRecipesRepository.create({
      category_id: category.id,
      name: 'Recipe 01',
      description: 'Recipe description',
      steps: 'Recipe steps',
      ingredients: 'Recipe ingredients',
      video_url: 'Recipe video URL',
    });

    const secondRecipe = await fakeRecipesRepository.create({
      category_id: category.id,
      name: 'Recipe 02',
      description: 'Recipe 02 description',
      steps: 'Recipe 02 steps',
      ingredients: 'Recipe 02 ingredients',
      video_url: 'Recipe 02 video URL',
    });

    expect(await listUserFavorites.execute(user.id)).toEqual([]);

    const firstUserFavorite = await fakeUserFavoritesRepository.create({
      user_id: user.id,
      recipe_id: firstRecipe.id,
    });

    const secondUserFavorite = await fakeUserFavoritesRepository.create({
      user_id: user.id,
      recipe_id: secondRecipe.id,
    });

    const userFavorites = await listUserFavorites.execute(user.id);

    expect(userFavorites).toEqual([
      { ...firstUserFavorite, recipe: { ...firstRecipe } },
      { ...secondUserFavorite, recipe: { ...secondRecipe } },
    ]);

    expect(await listUserFavorites.execute(user.id)).toHaveLength(2);
  });
});
