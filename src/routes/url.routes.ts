import { Router, Request, Response, NextFunction } from 'express';

import { shortenUrlController } from '../useCases/ShortenUrl';
import { redirectUrlController } from '../useCases/RedirectUrl';

const urlRoutes: Router = Router();

urlRoutes.post('/', (request: Request, response: Response, next: NextFunction) => {
    return shortenUrlController.handle(request, response, next);
});

urlRoutes.get('/:hash', async (request: Request, response: Response, next: NextFunction) => {
    return redirectUrlController.handle(request, response, next);
});

export default urlRoutes;