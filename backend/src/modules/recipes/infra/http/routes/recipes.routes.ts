import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import RecipesController from '../controllers/RecipesController';
import RecipeImageController from '../controllers/RecipeImageController';

const recipesRouter = Router();

const upload = multer(uploadConfig.multer);

const recipesController = new RecipesController();
const recipeImageController = new RecipeImageController();

recipesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      category_id: Joi.string().uuid().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      ingredients: Joi.string().required(),
      steps: Joi.string().required(),
      video_url: Joi.string().allow(''),
    },
  }),
  recipesController.create,
);

recipesRouter.put(
  '/:id',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      category_id: Joi.string().uuid().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      ingredients: Joi.string().required(),
      steps: Joi.string().required(),
      video_url: Joi.string().allow(''),
    },
  }),
  recipesController.update,
);

recipesRouter.delete(
  '/:id',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  recipesController.delete,
);

recipesRouter.patch(
  '/:id/image',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  upload.single('image'),
  recipeImageController.update,
);

recipesRouter.get(
  '/filtered/:category_id',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      category_id: Joi.string().uuid().required(),
    },
  }),
  recipesController.show,
);

recipesRouter.get('/all', ensureAuthenticated, recipesController.all);

export default recipesRouter;
