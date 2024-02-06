import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { router as apiRouter } from './routes/apiRouter'; // router.tsからルーターをインポート
import { router as pageRouter } from './routes/pageRouter'; // router.tsからルーターをインポート

const app = new Hono();

app.use('*', logger());

app.route('/page', pageRouter);

app.route('/api', apiRouter);

app.get('/', (c) => c.text('Hello from the app!'));

export default app;
