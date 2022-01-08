import 'dotenv/config';

const PORT: string = process.env.PORT as string;
const API_URL: string = process.env.API_URL as string;

export {
    PORT,
    API_URL,
}