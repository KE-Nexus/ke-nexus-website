const NODES = [
  { x: 8, y: 22 }, { x: 22, y: 8 }, { x: 38, y: 18 }, { x: 55, y: 6 },
  { x: 70, y: 16 }, { x: 88, y: 10 }, { x: 15, y: 42 }, { x: 33, y: 38 },
  { x: 50, y: 30 }, { x: 66, y: 40 }, { x: 82, y: 34 }, { x: 95, y: 46 },
  { x: 10, y: 64 }, { x: 28, y: 60 }, { x: 45, y: 70 }, { x: 60, y: 62 },
  { x: 76, y: 68 }, { x: 90, y: 74 }, { x: 20, y: 88 }, { x: 40, y: 92 },
  { x: 58, y: 86 }, { x: 74, y: 94 }, { x: 5, y: 90 }, { x: 96, y: 90 },
];

const LINKS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [1, 8], [2, 8], [4, 9], [5, 10],
  [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [6, 12], [7, 13], [8, 15], [10, 16], [11, 17],
  [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [12, 22], [13, 18], [14, 19], [15, 20], [16, 21],
  [17, 23], [18, 19], [19, 20], [20, 21],
];

interface NexusFieldProps {
  className?: string;
  nodeClassName?: string;
  lineClassName?: string;
}

export function NexusField({ className, nodeClassName, lineClassName }: NexusFieldProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className={lineClassName ?? 'stroke-gold-400/25'} strokeWidth="0.15" fill="none">
        {LINKS.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
          />
        ))}
      </g>
      <g className={nodeClassName ?? 'fill-gold-400/70'}>
        {NODES.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={i % 5 === 0 ? 0.7 : 0.4} />
        ))}
      </g>
    </svg>
  );
}
