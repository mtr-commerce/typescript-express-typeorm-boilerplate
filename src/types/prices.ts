export interface OptionsValue {
  name: string;
  value: number;
  img: string;
}

export type ReceivedOptionsValues = {
  [key: string]: string[];
};

export type OptionsValues = {
  [key: string]: OptionsValue[];
};
