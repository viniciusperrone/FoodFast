import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import recipesRouter from '@modules/recipes/infra/http/routes/recipes.routes';
import userFavoritesRouter from '@modules/user-favorites/infra/http/routes/user-favorites.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

routes.use('/categories', categoriesRouter);
routes.use('/recipes', recipesRouter);
routes.use('/user-favorites', userFavoritesRouter);

export default routes;
