import styled from "styled-components";
import { theme } from "shared/styles/theme";

export const Typography = styled.p<{
  $variant?: keyof typeof theme.typography;
  $color?: keyof typeof theme.colors.text;
  $align?: "left" | "center" | "right";
  $weight?: "400" | "500" | "600" | "700";
}>`
  font-size: ${({ $variant = "body" }) => theme.typography[$variant].size};
  font-weight: ${({ $weight }) => $weight || theme.typography.body.weight};
  line-height: ${({ $variant = "body" }) =>
    theme.typography[$variant].lineHeight};
  color: ${({ $color = "primary" }) => theme.colors.text[$color]};
  text-align: ${({ $align }) => $align || "left"};
  margin: 0;
`;

export const Title = styled(Typography).attrs({ as: "h1" })``;
export const Subtitle = styled(Typography).attrs({ as: "h2" })``;
export const Text = styled(Typography)``;
