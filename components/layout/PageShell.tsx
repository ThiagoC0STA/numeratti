import type { ReactNode } from "react";

export const PAGE_SHELL_CLASS =
  "min-h-screen bg-gradient-to-b from-stone-50 via-white to-[#fff7f0]";

export default function PageShell({ children }: { children: ReactNode }) {
  return <div className={PAGE_SHELL_CLASS}>{children}</div>;
}
