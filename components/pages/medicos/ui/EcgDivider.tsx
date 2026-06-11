import EcgLine from "./EcgLine";

/**
 * Divisor de seção em forma de ECG. Conecta as seções com o motivo de
 * batimento cardíaco, criando um ritmo visual próprio da LP (não usado em
 * nenhuma outra página). Decorativo.
 */
export default function EcgDivider({ color = "#e8740c" }: { color?: string }) {
  return (
    <div className="relative bg-premium-dark" aria-hidden>
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-2 opacity-50">
        <EcgLine color={color} speed="5s" height={28} />
      </div>
    </div>
  );
}
