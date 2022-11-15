import styled from 'styled-components';

export const TransactionTableHeader = styled.th`
  text-align: center;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.blue};
  width: ${p => p.theme.sizes.px};
  border-bottom: 1px solid ${p => p.theme.colors.grey};
`;

export const TransactionTable = styled.td`
  text-align: center;
  padding: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid ${p => p.theme.colors.grey};
`;

export const TransactionTableRow = styled.tr`
  &:nth-child(2n) {
    background-color: ${p => p.theme.colors.lightBlue};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.grey};
  }
`;
