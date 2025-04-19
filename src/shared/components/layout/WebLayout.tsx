import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../ui/Box";

const LayoutContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.surface};
`;

const Header = styled.header`
  background: ${({ theme }) => theme.colors.background.surface};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  width: 100%;
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.background.main};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.small.size};
`;

const Title = styled.h1`
  cursor: pointer;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

interface WebLayoutProps {
  children: React.ReactNode;
}

export const WebLayout = ({ children }: WebLayoutProps) => {
  const navigate = useNavigate();
  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <LayoutContainer>
      <Header>
        <Box $flex $justify="space-between" $align="center">
          <Title onClick={handleTitleClick}>The Movie Database</Title>
        </Box>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>© {new Date().getFullYear()} The Movie Database. All rights reserved.</p>
      </Footer>
    </LayoutContainer>
  );
};
