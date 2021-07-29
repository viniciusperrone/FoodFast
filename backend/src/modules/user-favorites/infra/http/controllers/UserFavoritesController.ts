import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserFavoriteService from '@modules/user-favorites/services/CreateUserFavoriteService';
import DeleteUserFavoriteService from '@modules/user-favorites/services/DeleteUserFavoriteService';
import ListUserFavoritesService from '@modules/user-favorites/services/ListUserFavoritesService';

export default class UserFavoritesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { recipe_id } = request.body;

    const createUserFavorite = container.resolve(CreateUserFavoriteService);

    const userFavorite = await createUserFavorite.execute({
      user_id,
      recipe_id,
    });

    return response.json(userFavorite);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserFavorite = container.resolve(DeleteUserFavoriteService);

    await deleteUserFavorite.execute(id);

    return response.json({ status: 200 });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listUserFavorites = container.resolve(ListUserFavoritesService);

    const userFavorites = await listUserFavorites.execute(user_id);

    return response.json(userFavorites);
  }
}
