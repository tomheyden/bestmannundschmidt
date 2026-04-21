"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  index: string;
  title: string;
  body: string;
};

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.index} className="rule-top last:border-b last:border-navy/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 py-7 text-left group"
            >
              <div className="flex items-baseline gap-6">
                <span className="section-index pt-1.5">{item.index}</span>
                <span className="display-3 text-navy">
                  {item.title}
                </span>
              </div>
              <span className="pt-2 text-navy/55 transition-colors group-hover:text-navy">
                {isOpen ? <Minus size={18} strokeWidth={1.25} /> : <Plus size={18} strokeWidth={1.25} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                  className="overflow-hidden"
                >
                  <div className="pb-9 pl-16 pr-6 max-w-3xl">
                    <p className="text-[15px] leading-relaxed text-slate-detail/90">{item.body}</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
