export const metadata = {
  title: "Numeratti Studio",
  description: "Painel de conteúdo do blog Numeratti",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="fixed inset-0 z-[9999]">{children}</div>;
}
