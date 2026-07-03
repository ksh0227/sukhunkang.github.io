import { buildLlmsTxt } from "../data/llms";

// Statically render /llms.txt at build time (compatible with output: export).
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
