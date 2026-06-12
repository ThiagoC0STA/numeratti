/**
 * Linha de ECG (batimento cardíaco): motivo visual da área da saúde.
 * O traçado é desenhado da esquerda para a direita em loop (animação de
 * stroke-dashoffset via classe .ecg-path). Puramente decorativo.
 */
type Props = {
  /** Cor do traçado. Padrão: laranja da marca. */
  color?: string;
  /** Duração de um ciclo de desenho. Padrão: 4s. */
  speed?: string;
  className?: string;
  height?: number;
};

// 6 batimentos (P-QRS-T) ao longo de 1200px de largura. Comprimento de
// caminho ~1820 (usado no stroke-dasharray para o efeito de desenho).
const BEAT = "h60 l12 -7 l12 7 h18 l7 6 l6 -44 l6 50 l6 -12 h16 l13 -9 l13 9 h31";
const D = `M0 45 ${Array.from({ length: 6 }, () => BEAT).join(" ")}`;

export default function EcgLine({ color = "#e8740c", speed = "4s", className = "", height = 48 }: Props) {
  return (
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      width="100%"
      height={height}
      fill="none"
      aria-hidden
      className={className}
      style={{ display: "block", overflow: "visible" }}
    >
      {/* trilho de base, bem sutil */}
      <line x1="0" y1="45" x2="1200" y2="45" stroke={color} strokeOpacity="0.12" strokeWidth="1" />
      {/* traçado vivo */}
      <path
        className="ecg-path"
        d={D}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          {
            "--ecg-len": "1820",
            "--ecg-speed": speed,
            filter: `drop-shadow(0 0 6px ${color}88)`,
          } as React.CSSProperties
        }
      />
    </svg>
  );
}
