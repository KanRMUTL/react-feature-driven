import styled from "styled-components";
import { useState } from "react";
import { Button } from "../../../shared/components/ui/Button";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 16px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchBar = ({
  onSearch,
}: {
  onSearch: (keyword: string) => void;
}) => {
  const [value, setValue] = useState("");
  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="ค้นหาชื่อหนัง..."
      />
      <Button onClick={() => onSearch(value)}>ค้นหา</Button>
    </Container>
  );
};
