import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Inter,
  Mulish,
  Noto_Sans_Mono
} from 'next/font/google';

import { cn } from '@/lib/utils';

// const fontSans = Geist({
//   // subsets: ['latin'],
//   subsets: ['latin', 'vietnamese'],
//   variable: '--font-sans'
// });

// const fontMono = Geist_Mono({
//   // subsets: ['latin'],
//   subsets: ['latin', 'vietnamese'],
//   variable: '--font-mono'
// });

// const fontInstrument = Instrument_Sans({
//   // subsets: ['latin'],
//   subsets: ['latin', 'vietnamese'],
//   variable: '--font-instrument'
// });

const fontNotoMono = Noto_Sans_Mono({
  // subsets: ['latin'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-noto-mono'
});

const fontMullish = Mulish({
  // subsets: ['latin'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-mullish'
});

const fontInter = Inter({
  // subsets: ['latin'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter'
});

export const fontVariables = cn(
  // fontSans.variable,
  // fontMono.variable,
  // fontInstrument.variable,
  fontNotoMono.variable,
  fontMullish.variable,
  fontInter.variable
);
