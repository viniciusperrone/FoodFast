import { container } from 'tsyringe';

import '@modules/users/providers/index';
import './providers/index';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import IRecipesRepository from '@modules/recipes/repositories/IRecipesRepository';
import RecipesRepository from '@modules/recipes/infra/typeorm/repositories/RecipesRepository';

import IUserFavoritesRepository from '@modules/user-favorites/repositories/IUserFavoritesRepository';
import UserFavoritesRepository from '@modules/user-favorites/infra/typeorm/repositories/UserFavoritesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository,
);

container.registerSingleton<IUserFavoritesRepository>(
  'UserFavoritesRepository',
  UserFavoritesRepository,
);
