import { css } from "styled-components";

export type Size = "S" | "M" | "L" | "XL";
export type FlexJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "space-between"
  | "space-evenly";
export type FlexAlign =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline"
  | "self-end";

interface FlexProps {
  gap?: number | Size;
  justify?: FlexJustify;
  align?: FlexAlign;
  reverse?: boolean;
  wrap?: boolean;
}

export const sizes: Record<Size, string> = {
  S: "10px",
  M: "20px",
  L: "30px",
  XL: "40px",
};

export const stack = (
  gap: number | Size,
  justify: FlexJustify = "flex-start",
  align: FlexAlign = "flex-start",
  reverse?: "reverse",
  noMarginBotoom = false
) => css`
  display: flex;
  flex-direction: ${reverse ? "column-reverse" : "column"};
  justify-content: ${justify};
  align-items: ${align};
`;

export const row = (
  gap: number | Size,
  justify: FlexJustify = "flex-start",
  align: FlexAlign = "flex-start",
  reverse?: "reverse",
  wrap?: boolean
) => css`
  display: flex;
  flex-direction: ${reverse ? "row-reverse" : "row"};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap ? "wrap" : "no-wrap"};
`;
