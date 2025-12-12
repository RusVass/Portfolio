interface AnimatedFlagProps {
  width?: number;
  height?: number;
  className?: string;
  ariaLabel?: string;
}

function AnimatedFlag({
  width = 128,
  height = 64,
  className,
  ariaLabel = "Ukrainian flag",
}: AnimatedFlagProps): JSX.Element {
  const clipId = "flagClip";
  const filterId = "flagWave";

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width={width}
      height={height}
      viewBox="0 0 128 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="128" height="64" rx="10" />
        </clipPath>
        <filter id={filterId} x="-12%" y="-40%" width="124%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.22" numOctaves="4" seed="6" result="turbulence">
            <animate attributeName="baseFrequency" values="0.018 0.22;0.03 0.28;0.018 0.22" dur="8s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="24" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g clipPath={`url(#${clipId})`} filter={`url(#${filterId})`}>
        <rect width="128" height="32" fill="#005BBB" />
        <rect y="32" width="128" height="32" fill="#FFD500" />
      </g>
      <rect
        width="128"
        height="64"
        rx="10"
        ry="10"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
      />
    </svg>
  );
}

export { AnimatedFlag };

