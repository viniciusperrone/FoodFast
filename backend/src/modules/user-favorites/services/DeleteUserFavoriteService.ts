import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import IUserFavoritesRepository from '../repositories/IUserFavoritesRepository';

@injectable()
class DeleteUserFavoriteService {
  constructor(
    @inject('UserFavoritesRepository')
    private userFavoritesRepository: IUserFavoritesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(id: string): Promise<void> {
    const userFavorite = await this.userFavoritesRepository.findById(id);

    if (!userFavorite) {
      throw new AppError('User favorite not found.');
    }

    this.cacheProvider.invalidatePrefix('favorite-recipes-list');

    await this.userFavoritesRepository.remove(userFavorite);
  }
}

export default DeleteUserFavoriteService;
