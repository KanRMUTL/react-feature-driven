import styled from "styled-components";
import { useState, useEffect } from "react";
import { Button } from "shared/components/ui/Button";

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.body.size};
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

interface SearchBarProps {
  onSearch: (keyword: string) => void;
  initialValue?: string;
}

export const SearchBar = ({ onSearch, initialValue = "" }: SearchBarProps) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="ค้นหาชื่อหนัง..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(value);
          }
        }}
      />
      <Button onClick={() => onSearch(value)}>ค้นหา</Button>
    </Container>
  );
};
