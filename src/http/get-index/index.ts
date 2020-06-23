import { render } from "./render.tsx";

export async function handler(req:object) {
  return {
    headers: {
      "content-type": "text/html; charset=utf8",
    },
    body: await render(),
  };
}
