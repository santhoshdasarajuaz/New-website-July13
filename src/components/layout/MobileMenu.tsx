import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { nav } from "@/data/navigation";
import { company } from "@/data/company";
import { Logo } from "@/components/ui/logo";
import { CTAButton } from "@/components/ui/cta-button";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          <div className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <Logo />
              <button aria-label="Close menu" onClick={onClose} className="h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-surface-muted">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-2">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-border/60">
                  <div className="flex items-center">
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="flex-1 px-5 py-4 text-[15px] font-medium text-ink hover:text-royal"
                    >
                      {item.label}
                    </Link>
                    {item.children?.length ? (
                      <button
                        aria-label={`Toggle ${item.label}`}
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        className="px-4 py-4 text-ink-soft"
                      >
                        <ChevronDown
                          className="h-4 w-4 transition-transform"
                          style={{ transform: expanded === item.label ? "rotate(180deg)" : undefined }}
                        />
                      </button>
                    ) : null}
                  </div>
                  {item.children?.length && expanded === item.label ? (
                    <div className="pb-3 bg-surface-muted/60">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to as string}
                          params={c.params as never}
                          onClick={onClose}
                          className="block px-8 py-2.5 text-sm text-ink-soft hover:text-royal"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="p-5 border-t border-border space-y-3">
              <CTAButton to="/contact" className="w-full">Get Started</CTAButton>
              <div className="text-xs text-ink-soft text-center">
                <div>{company.phone}</div>
                <div>{company.email}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
