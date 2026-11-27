'use client';

/**
 * SVG displacement filters for liquid glass.
 * Simplified to a single safe displacement pass to avoid browser crashes.
 * Full refraction only works in Chromium via backdrop-filter: url().
 */
export function LiquidGlassFilter() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <filter
          id="liquid-glass"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.2" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="24"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter
          id="liquid-glass-strong"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.009"
            numOctaves="2"
            seed="12"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.4" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="32"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
