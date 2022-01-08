import mongoose from 'mongoose';

import { DATABASE_URL } from '../config/database';

const connection = async (): Promise<void> => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Database running');
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}

export default connection;