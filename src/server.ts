import { PORT } from 'config/app';
import { app, connection } from './app';

app.listen(PORT, async () => {
    await connection();
    console.log(`Listening on port ${PORT}`);
});