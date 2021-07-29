import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import UserFavoritesController from '../controllers/UserFavoritesController';

const userFavoritesRouter = Router();

const userFavoritesController = new UserFavoritesController();

userFavoritesRouter.post(
  '/',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      recipe_id: Joi.string().uuid().required(),
    },
  }),
  userFavoritesController.create,
);

userFavoritesRouter.delete(
  '/:id',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  userFavoritesController.delete,
);

userFavoritesRouter.get('/', ensureAuthenticated, userFavoritesController.show);

export default userFavoritesRouter;
