import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Box } from "shared/components/ui/Box";

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.background.hover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 500;
  }
`;

export const Navigation = () => {
  return (
    <Box $flex $justify="center" $align="center">
      <Nav>
        <NavItem to="/" end>
          Popular
        </NavItem>
        <NavItem to="/top-rated">Top Rated</NavItem>
        <NavItem to="/upcoming">Upcoming</NavItem>
        <NavItem to="/now-playing">Now Playing</NavItem>
      </Nav>
    </Box>
  );
};
