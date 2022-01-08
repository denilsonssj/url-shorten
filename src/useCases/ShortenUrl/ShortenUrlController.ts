import { Request, Response, NextFunction }  from 'express';

import ShortenUrlUseCase from './ShortenUrlUseCase';

class ShortenUrlController {

    constructor(private shortenUrlUseCase: ShortenUrlUseCase) {}

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const { originUrl } = request.body;
        try {
            const url = await this.shortenUrlUseCase.execute({ originUrl });
            return response.send(url);
        } catch(e) {
            return response.status(400).send();
        }
    }

}

export default ShortenUrlController;