import styled from "styled-components";
import { theme } from "../../../shared/styles/theme";

export const Box = styled.div<{
  $p?: keyof typeof theme.spacing;
  $m?: keyof typeof theme.spacing;
  $bg?: keyof typeof theme.colors.background;
  $radius?: keyof typeof theme.borderRadius;
  $shadow?: keyof typeof theme.shadows;
  $flex?: boolean;
  $direction?: "row" | "column";
  $align?: "flex-start" | "center" | "flex-end";
  $justify?: "flex-start" | "center" | "flex-end" | "space-between";
  $gap?: keyof typeof theme.spacing;
}>`
  padding: ${({ $p }) => $p && theme.spacing[$p]};
  margin: ${({ $m }) => $m && theme.spacing[$m]};
  background: ${({ $bg }) => $bg && theme.colors.background[$bg]};
  border-radius: ${({ $radius }) => $radius && theme.borderRadius[$radius]};
  box-shadow: ${({ $shadow }) => $shadow && theme.shadows[$shadow]};

  ${({ $flex }) => $flex && "display: flex;"}
  ${({ $direction }) => $direction && `flex-direction: ${$direction};`}
  ${({ $align }) => $align && `align-items: ${$align};`}
  ${({ $justify }) => $justify && `justify-content: ${$justify};`}
  ${({ $gap }) => $gap && `gap: ${theme.spacing[$gap]};`}
`;

export const Card = styled(Box)`
  transition: ${theme.transitions.default};
  &:hover {
    transform: translateY(-4px);
  }
`;
