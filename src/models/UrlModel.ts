import { Schema, model } from 'mongoose';

import IUrl from 'interfaces/IUrl';

const urlSchema = new Schema<IUrl>({
    hash: { type: String, require: true, },
    originUrl: { type: String, require: true, },
    shortUrl: { type: String, require: true, },
});

const UrlModel = model<IUrl>('Url', urlSchema);

export { UrlModel };