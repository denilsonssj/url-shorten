import { app, port, connection } from './app';

app.listen(port, async () => {
    await connection();
    console.log(`Listening on port ${port}`);
});