import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import CategoriesController from '../controllers/CategoriesController';
import CategoryImageController from '../controllers/CategoryImageController';

const categoriesRouter = Router();

const upload = multer(uploadConfig.multer);

const categoriesController = new CategoriesController();
const categoryImageController = new CategoryImageController();

categoriesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  categoriesController.create,
);

categoriesRouter.put(
  '/:id',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  categoriesController.update,
);

categoriesRouter.delete(
  '/:id',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  categoriesController.delete,
);

categoriesRouter.patch(
  '/:id/image',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  upload.single('image'),
  categoryImageController.update,
);

categoriesRouter.get('/all', ensureAuthenticated, categoriesController.show);

export default categoriesRouter;
