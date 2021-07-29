import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateCategoryImageService from '@modules/categories/services/UpdateCategoryImageService';

export default class CategoryImageController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateCategoryImage = container.resolve(UpdateCategoryImageService);

    const category = await updateCategoryImage.execute({
      category_id: id,
      imageFilename: request.file.filename,
    });

    return response.json(classToClass(category));
  }
}
