// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Fox = {
  id: number;
  name: string;
  colour: string;
  species: string;
  description: string;
};

export type Foxes = readonly Fox[];

export type FoxProps =
  | { kind: "id"; key: number }
  | { kind: "name"; key: string }
  | { kind: "colour"; key: string }
  | { kind: "species"; key: string }
  | { kind: "description"; key: string };
