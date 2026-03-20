import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const honeypot = typeof body.hp === "string" ? body.hp.trim() : "";
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const segment = typeof body.segment === "string" ? body.segment.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const privacyAccepted = body.privacyAccepted === true;

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Informe seu nome." }, { status: 400 });
    }
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
    }
    if (!message || message.length < 8) {
      return NextResponse.json({ error: "Escreva uma mensagem (mínimo 8 caracteres)." }, { status: 400 });
    }
    if (!privacyAccepted) {
      return NextResponse.json({ error: "Aceite a política de privacidade para continuar." }, { status: 400 });
    }

    const payload = {
      name,
      email,
      phone,
      company,
      segment,
      website,
      message,
      receivedAt: new Date().toISOString(),
    };

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else if (process.env.NODE_ENV === "development") {
      console.info("[contact]", payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }
}
