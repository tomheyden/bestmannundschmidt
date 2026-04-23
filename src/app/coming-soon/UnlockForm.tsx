"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock } from "lucide-react";

export function UnlockForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setError(null);

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.replace("/");
        router.refresh();
        return;
      }

      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Das Passwort ist nicht korrekt.");
      setPending(false);
    } catch {
      setError("Verbindung fehlgeschlagen. Bitte erneut versuchen.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <label className="flex flex-col gap-2">
        <span className="label text-navy/60">Passwort</span>
        <div className="flex items-center gap-3 border-b border-navy/30 focus-within:border-navy transition-colors">
          <Lock size={16} strokeWidth={1.5} className="text-navy/45" />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null);
            }}
            className="flex-1 bg-transparent outline-none py-2 text-[16px] text-navy placeholder:text-navy/30"
            placeholder="•••••••"
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "unlock-error" : undefined}
          />
        </div>
      </label>

      {error ? (
        <p id="unlock-error" className="text-[13px] text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || password.length === 0}
        className="btn-magnetic on-ivory self-start disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="label">{pending ? "Wird geprüft …" : "Freischalten"}</span>
        <ArrowRight size={14} strokeWidth={1.75} />
      </button>
    </form>
  );
}
