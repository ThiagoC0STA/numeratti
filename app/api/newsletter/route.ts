import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const honeypot = typeof body.hp === "string" ? body.hp.trim() : "";
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const email = typeof body.email === "string" ? body.email.trim() : "";
    const consent = body.consent === true;

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: "Aceite a política de privacidade para continuar." }, { status: 400 });
    }

    const payload = { email, subscribedAt: new Date().toISOString() };
    const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else if (process.env.NODE_ENV === "development") {
      console.info("[newsletter]", payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }
}
