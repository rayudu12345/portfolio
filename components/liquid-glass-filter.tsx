'use client';

/**
 * SVG displacement filters for liquid glass.
 *
 * Techniques explored:
 * - Procedural noise (feTurbulence) as displacement map
 * - Softened map (feGaussianBlur) for organic liquid feel
 * - Mild chromatic aberration via dual-pass displacement + channel isolation
 *
 * Full refraction only works in Chromium via backdrop-filter: url().
 * Other browsers fall back to the CSS blur/saturate path.
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
        {/* Primary liquid filter — soft organic refraction */}
        <filter
          id="liquid-glass"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.007 0.011"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.4" result="soft" />

          {/* Main displacement */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="28"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />

          {/* Mild chromatic split: slightly stronger red pass */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="36"
            xChannelSelector="R"
            yChannelSelector="G"
            result="redShift"
          />
          <feColorMatrix
            in="redShift"
            type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="redOnly"
          />
          <feColorMatrix
            in="displaced"
            type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
            result="gbOnly"
          />
          <feBlend in="redOnly" in2="gbOnly" mode="screen" />
        </filter>

        {/* Stronger variant for larger cards */}
        <filter
          id="liquid-glass-strong"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.009"
            numOctaves="2"
            seed="12"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.6" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
