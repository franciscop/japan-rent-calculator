import { expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

// Commented-out markup is not loaded, so it should not be checked either
const html = readFileSync("index.html", "utf8").replace(/<!--[\s\S]*?-->/g, "");

test("the page declares what it needs", () => {
  expect(html).toInclude("<title>");
  expect(html).toMatch(/name="description"/);
  expect(html).toMatch(/rel="[^"]*icon"/);
  expect(html).toMatch(/property="og:image"/);
});

// Every local file the page points at has to exist, which is the failure mode
// a static site actually has: a renamed icon or a share card that 404s.
test("every local asset it references exists", () => {
  const attrs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  const social = [...html.matchAll(/(?:og:image|twitter:image)" content="([^"]+)"/g)].map((m) => m[1]);
  const refs = [...attrs, ...social]
    .filter((ref) => !/^(https?:|data:|mailto:|#|\/\/)/.test(ref))
    .filter((ref) => !/[\s,]/.test(ref))
    .filter((ref) => /\.[a-z0-9]{2,5}$/i.test(ref));
  expect(refs.length).toBeGreaterThan(0);
  for (const ref of refs) {
    const file = ref.replace(/^\//, "").split("?")[0];
    expect(existsSync(file), file).toBe(true);
  }
});
