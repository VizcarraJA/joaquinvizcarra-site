export const dynamic = "force-static";

export function GET() {
  return new Response(
    "This writing feed has been retired. Visit https://joaquinvizcarra.com for current research, publications, and speaking.\n",
    {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "X-Robots-Tag": "noindex"
      }
    }
  );
}
