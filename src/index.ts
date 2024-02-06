import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { router as myRouter } from './routes/router'; // router.tsからルーターをインポート

const app = new Hono();

app.use('*', logger());

app.route('/api', myRouter);

app.get('/', (c) => c.text('Hello from the app!'));

export default app;
