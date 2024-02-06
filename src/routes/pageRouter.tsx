// router.ts
import { Hono } from 'hono';
import { jsxRenderer, useRequestContext } from 'hono/jsx-renderer';
import { jsx } from 'hono/jsx';

// 新しいHonoインスタンスを作成
const router = new Hono();

// ルートの定義
router.get(
  '/*',
  jsxRenderer(({ children }) => {
    return (
      <html>
        <body>
          <header>Menu</header>
          <div>{children}</div>
        </body>
      </html>
    );
  })
);

router.get('/', (c) => {
  return c.render(<h1>Page Route Path!!</h1>);
});

router.get('/about', (c) => {
  return c.render(<h1>About me!</h1>);
});
// ルーターをエクスポート
export { router };
