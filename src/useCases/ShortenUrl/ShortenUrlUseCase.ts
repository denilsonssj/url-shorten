import { generate } from 'shortid';

import { UrlModel } from '../../models/UrlModel';
import { ICreateShortenUrlDTO } from './ICreateShortenUrlDTO';
import { API_URL } from '../../config/app';

class ShortenUrlUseCase {
    async execute(data: ICreateShortenUrlDTO): Promise<any> {
        const { originUrl } = data;
        const urlExists = await UrlModel.findOne({ originUrl }).exec();
        if (urlExists) {
            return urlExists;
        }
        const hash: string = generate();
        const shortUrl: string = `${API_URL}/${hash}`;
        const url = new UrlModel({
            originUrl,
            hash,
            shortUrl,
        });
        await url.save();
        return url;
    }
}

export default ShortenUrlUseCase;
