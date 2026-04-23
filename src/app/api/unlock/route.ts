import { NextResponse } from "next/server";
import { SITE_UNLOCK_COOKIE } from "@/lib/site-gate";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function POST(request: Request) {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: "Zugang ist serverseitig nicht konfiguriert." },
      { status: 500 },
    );
  }

  let password = "";
  try {
    const body = (await request.json()) as { password?: unknown };
    if (typeof body?.password === "string") {
      password = body.password;
    }
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (!password || !timingSafeEqual(password, expected)) {
    return NextResponse.json(
      { error: "Das Passwort ist nicht korrekt." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: SITE_UNLOCK_COOKIE,
    value: "1",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: THIRTY_DAYS,
  });
  return response;
}
