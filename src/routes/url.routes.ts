import { Router, Request, Response, NextFunction } from 'express';

import { shortenUrlController } from '../useCases/ShortenUrl';

const urlRoutes: Router = Router();

urlRoutes.post('/', (request: Request, response: Response, next: NextFunction) => {
    return shortenUrlController.handle(request, response, next);
});

export default urlRoutes;