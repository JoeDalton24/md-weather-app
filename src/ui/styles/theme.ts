import { DefaultTheme } from "styled-components/native";
import { Colors, colors } from "./colors";

export const theme: DefaultTheme = {
  colors,
};

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: Colors;
  }
}
