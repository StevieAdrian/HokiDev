/** Liveness probe. Unauthenticated on purpose: it exposes no app data. */
export async function GET() {
  return Response.json({ status: 'ok' });
}
