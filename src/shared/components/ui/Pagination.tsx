import styled from "styled-components";
import { Box } from "./Box";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const PageButton = styled.button<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary.main : theme.colors.background.main};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.background.main : theme.colors.text.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primary.dark : theme.colors.background.hover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pagesToShow?: number;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  pagesToShow = 5,
}: PaginationProps) => {
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  return (
    <Wrapper>
      <PageButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        First
      </PageButton>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PageButton>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          $active={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
      <PageButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </PageButton>
    </Wrapper>
  );
};
