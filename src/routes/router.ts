// router.ts
import { Hono } from "hono";

// 新しいHonoインスタンスを作成
const router = new Hono();

// ルートの定義
router.get("/", async (c) => c.text("Hello from the router!"));
router.get("/about", async (c) => c.text("About page"));

router.get("/hello", (c) => {
  return c.json({
    ok: true,
    message: "Hello Hono!",
  });
});

router.get("/posts/:id", (c) => {
  const page = c.req.query("page");
  const id = c.req.param("id");

  return c.text(`Post ID: ${id} page: ${page}`);
});
// ルーターをエクスポート
export { router };
