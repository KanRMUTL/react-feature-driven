import styled from "styled-components";
import { Theme } from "../../types/theme";

type DividerVariant = "solid" | "dashed" | "dotted";
type DividerOrientation = "horizontal" | "vertical";

interface DividerProps {
  $variant?: DividerVariant;
  $orientation?: DividerOrientation;
  $color?: keyof Theme["colors"]["text"];
  $spacing?: keyof Theme["spacing"];
  $thickness?: string;
}

const getBorderStyle = (variant: DividerVariant) => {
  switch (variant) {
    case "dashed":
      return "dashed";
    case "dotted":
      return "dotted";
    default:
      return "solid";
  }
};

export const Divider = styled.hr<DividerProps>`
  width: 100%;
  ${({
    $orientation = "horizontal",
    $variant = "solid",
    $color = "secondary",
    $thickness = "1px",
    theme,
  }) => {
    const colorValue = theme.colors.text[$color];

    if ($orientation === "horizontal") {
      return `
        border-top: ${$thickness} ${getBorderStyle($variant)} ${colorValue};
        opacity: 0.2;
      `;
    }
    return `
      border-left: ${$thickness} ${getBorderStyle($variant)} ${colorValue};
      opacity: 0.2;
      height: 100%;
    `;
  }}
`;
