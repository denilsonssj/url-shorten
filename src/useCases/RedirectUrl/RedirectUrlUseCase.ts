import { UrlModel } from '../../models/UrlModel';
import { IRedirectUrlDTO } from './IRedirectUrlDTO';

class RedirectUrlUseCase {

    async execute(redirectUrlDTO: IRedirectUrlDTO): Promise<any> {
        const { hash } = redirectUrlDTO;
        const urlExists = await UrlModel.findOne({ hash });
        if (urlExists) {
            return urlExists;
        }
        throw new Error('Url not found!');
    }

}

export default RedirectUrlUseCase;