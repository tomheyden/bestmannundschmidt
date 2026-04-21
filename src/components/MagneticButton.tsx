"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "on-navy" | "on-ivory";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
};

type LinkProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

export function MagneticButton(props: ButtonProps | LinkProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { children, variant = "on-ivory", className, icon } = props;

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${relX * 0.18}px, ${relY * 0.28}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const inner = (
    <span
      ref={ref}
      className="relative inline-flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
    >
      <span className="label">{children}</span>
      {icon}
    </span>
  );

  const base = cn("btn-magnetic inline-flex items-center group", variant, className);

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={base}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={base}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {inner}
    </button>
  );
}
