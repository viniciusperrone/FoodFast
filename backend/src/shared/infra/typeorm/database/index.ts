import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Category from '@modules/categories/infra/typeorm/entities/Category';
import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import UserFavorite from '@modules/user-favorites/infra/typeorm/entities/UserFavorite';
import {
  AddCategoryIdToRecipe,
  AddRecipeIdToFavorites,
  AddUserIdToFavorites,
  CreateCategories,
  CreateRecipes,
  CreateUserFavorites,
  CreateUsers,
  CreateUsersToken,
} from './migrations';

dotenv.config();

export const dataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT) | 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [User, UserToken, UserFavorite, Category, Recipe],
  migrations: [
    CreateUsers,
    CreateUsersToken,
    CreateCategories,
    CreateRecipes,
    CreateUserFavorites,
    AddCategoryIdToRecipe,
    AddUserIdToFavorites,
    AddRecipeIdToFavorites,
  ],
});
