import styled from 'styled-components'
import { Button } from './Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.md};
`

export const Pagination = ({ page, onPageChange }: { page: number; onPageChange: (p: number) => void }) => {
  return (
    <Wrapper>
      <Button onClick={() => onPageChange(page - 1)} disabled={page === 1}>Previous</Button>
      <Button onClick={() => onPageChange(page + 1)} style={{ marginLeft: '8px' }}>Next</Button>
    </Wrapper>
  )
}