import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCategoriesRepository from '../repositories/fakes/FakeCategoriesRepository';

import ListCategoriesService from './ListCategoriesService';

let fakeCacheProvider: FakeCacheProvider;

let fakeUsersRepository: FakeUsersRepository;
let fakeCategoriesRepository: FakeCategoriesRepository;

let listCategories: ListCategoriesService;

describe('ListCategories', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCategoriesRepository = new FakeCategoriesRepository();

    fakeCacheProvider = new FakeCacheProvider();

    listCategories = new ListCategoriesService(
      fakeCategoriesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list all the categories', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const firstCategory = await fakeCategoriesRepository.create({
      name: 'Category 01',
    });

    const secondCategory = await fakeCategoriesRepository.create({
      name: 'Category 02',
    });

    await listCategories.execute(user.id);

    const categories = await listCategories.execute(user.id);

    expect(categories).toEqual([firstCategory, secondCategory]);
  });
});
