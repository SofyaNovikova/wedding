import { Sex } from "constants/constants";

export type Guest = {
  id: string;
  name: string;
  invitation?: string;
  single?: boolean;
  sex?: Sex;
};
