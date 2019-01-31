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
