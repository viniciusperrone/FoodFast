import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import FakeRecipesRepository from '../repositories/fakes/FakeRecipesRepository';

import ListFilteredRecipesService from './ListFilteredRecipesService';

let fakeCacheProvider: FakeCacheProvider;

let fakeUsersRepository: FakeUsersRepository;
let fakeCategoriesRepository: FakeCategoriesRepository;
let fakeRecipesRepository: FakeRecipesRepository;

let listFilteredRecipes: ListFilteredRecipesService;

describe('ListFilteredRecipes', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCategoriesRepository = new FakeCategoriesRepository();
    fakeRecipesRepository = new FakeRecipesRepository();

    fakeCacheProvider = new FakeCacheProvider();

    listFilteredRecipes = new ListFilteredRecipesService(
      fakeRecipesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list all the recipes', async () => {
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

    await listFilteredRecipes.execute(1, category.id, user.id);

    const recipes = await listFilteredRecipes.execute(1, category.id, user.id);

    const accumulatedRecipes = await listFilteredRecipes.execute(
      2,
      category.id,
      user.id,
    );

    const emptyRecipes = await listFilteredRecipes.execute(
      4,
      category.id,
      user.id,
    );

    expect(recipes).toEqual([firstRecipe, secondRecipe]);

    expect(accumulatedRecipes).toEqual([firstRecipe, secondRecipe]);

    expect(emptyRecipes).toEqual([]);
  });
});
