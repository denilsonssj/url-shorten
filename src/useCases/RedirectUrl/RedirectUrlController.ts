import { Request, Response, NextFunction }  from 'express';

import RedirectUrlUseCase from './RedirectUrlUseCase';

class RedirectUrlController {

    constructor(private redirectUrlUseCase: RedirectUrlUseCase) {}

    async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
        const { hash } = request.params;
        try {
            const url = await this.redirectUrlUseCase.execute({ hash });
            return response.status(200).redirect(url.originUrl);
        } catch(e) {
            return response.status(400).send({ error: e.message });
        }
    }

}

export default RedirectUrlController;