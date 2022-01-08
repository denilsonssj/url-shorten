import 'dotenv/config';

const DATABASE_URL: string = process.env.DATABASE_URL as string;

export {
    DATABASE_URL,
}