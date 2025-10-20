// CoastalConciergeLogo.tsx
import * as React from 'react';

export type CoastalConciergeLogoProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
  sunColor?: string;
  waveColor1?: string;
  waveColor2?: string;
  wordmarkColor?: string;
  taglineColor?: string;
  showTagline?: boolean;
};

export default function CoastalConciergeLogo({
  title = 'Coastal Concierge',
  sunColor = '#F5A623',
  waveColor1 = '#2E8A95',
  waveColor2 = '#2B7E88',
  wordmarkColor = '#1F6A7A',
  taglineColor = '#2E8A95',
  showTagline = true,
  ...props
}: CoastalConciergeLogoProps) {
  return (
    <svg viewBox='0 0 500 500' role='img' aria-label={title} {...props}>
      <title>{title}</title>
      <defs>
        <style>
          {`
            .wordmark { font-family: 'Sailor', 'Sailor Std', 'Sailor-Regular', serif; font-weight: 700; letter-spacing: 6px; }
            .tagline { font-family: 'Libre Baskerville', 'LibreBaskerville-Regular', Georgia, serif; font-size: 22px; }
          `}
        </style>
      </defs>

      {/* Icon: sun + waves */}
      <g transform='translate(0,0)'>
        <circle cx='250' cy='175' r='52' fill={sunColor} />
        <path
          d='M135 215 C170 205, 205 205, 240 215 C260 221, 275 230, 292 230 C312 230, 327 222, 338 212 C346 205, 356 201, 368 201 C356 213, 345 228, 326 236 C306 245, 282 244, 262 236 C239 227, 220 222, 195 223 C173 225, 155 231, 135 241 Z'
          fill={waveColor1}
        />
        <path
          d='M110 245 C145 232, 185 235, 219 247 C240 254, 259 261, 281 261 C307 261, 328 251, 344 241 C354 234, 365 231, 377 232 C360 249, 336 266, 305 274 C276 281, 247 278, 220 268 C195 259, 170 257, 143 262 C131 264, 121 269, 110 276 Z'
          fill={waveColor2}
        />
      </g>

      {/* Wordmark */}
      <text
        x='250'
        y='315'
        textAnchor='middle'
        fontSize='48'
        className='wordmark'
        fill={wordmarkColor}
      >
        COASTAL CONCIERGE
      </text>

      {/* Tagline */}
      {showTagline && (
        <text
          x='250'
          y='355'
          textAnchor='middle'
          className='tagline'
          fill={taglineColor}
        >
          Live more, work less
        </text>
      )}
    </svg>
  );
}
