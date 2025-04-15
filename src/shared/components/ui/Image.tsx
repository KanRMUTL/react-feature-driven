import styled from "styled-components";
import { theme } from "../../../shared/styles/theme";

interface ImageProps {
  src: string;
  alt: string;
  fallback?: string;
  $radius?: keyof typeof theme.borderRadius;
  $shadow?: keyof typeof theme.shadows;
}

const StyledImage = styled.img<{
  $radius?: keyof typeof theme.borderRadius;
  $shadow?: keyof typeof theme.shadows;
}>`
  border-radius: ${({ $radius }) => $radius && theme.borderRadius[$radius]};
  box-shadow: ${({ $shadow }) => $shadow && theme.shadows[$shadow]};
  transition: ${theme.transitions.default};
  object-fit: cover;
`;

export const Image = ({
  src,
  alt,
  fallback = "/placeholder.jpg",
  $radius,
  $shadow,
}: ImageProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallback;
  };

  return (
    <StyledImage
      src={src}
      alt={alt}
      onError={handleError}
      $radius={$radius}
      $shadow={$shadow}
    />
  );
};
