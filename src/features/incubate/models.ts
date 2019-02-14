// Helpers to reduce code clutter until modifiers are implemented
export const alt = false;
export const ctl = false;

export type Keystroke = {
  char: string;
  ctl: boolean;
  alt: boolean;
};

export type KeystrokeAt = {
  char: string;
  ctl: boolean;
  alt: boolean;
  at: number;
};

export type RatedKeystroke = {
  char: string;
  ctl: boolean;
  alt: boolean;
  rating: number;
};
