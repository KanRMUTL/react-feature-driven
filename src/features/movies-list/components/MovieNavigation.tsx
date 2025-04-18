import styled from "styled-components";
import { Box } from "shared/components/ui/Box";

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavButton = styled.button<{ $active?: boolean }>`
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text.white : theme.colors.text.secondary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: ${({ theme }) => theme.transitions.default};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.background.hover : "none"};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.body.size};
  font-weight: ${({ $active }) => ($active ? "500" : "normal")};

  &:hover {
    color: ${({ theme }) => theme.colors.text.white};
    background: ${({ theme }) => theme.colors.background.hover};
  }
`;

interface MovieNavigationProps {
  category: string;
  onClick: (path: string) => void;
}

export const Navigation = ({ category, onClick }: MovieNavigationProps) => {
  return (
    <Box $flex $justify="center" $align="center">
      <Nav>
        <NavButton $active={category === "popular"} onClick={() => onClick("popular")}>
          Popular
        </NavButton>
        <NavButton
          $active={category === "top_rated"}
          onClick={() => onClick("top-rated")}
        >
          Top Rated
        </NavButton>
        <NavButton
          $active={category === "upcoming"}
          onClick={() => onClick("upcoming")}
        >
          Upcoming
        </NavButton>
        <NavButton
          $active={category === "now_playing"}
          onClick={() => onClick("now-playing")}
        >
          Now Playing
        </NavButton>
      </Nav>
    </Box>
  );
};
