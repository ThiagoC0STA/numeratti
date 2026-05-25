import type { ReactNode } from "react";

export const PAGE_SHELL_CLASS =
  "min-h-screen bg-white dark:bg-neutral-950";

export default function PageShell({ children }: { children: ReactNode }) {
  return <div className={PAGE_SHELL_CLASS}>{children}</div>;
}
