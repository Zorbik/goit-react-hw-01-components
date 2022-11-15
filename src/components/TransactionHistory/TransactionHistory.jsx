import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  TransactionTableHeader,
  TransactionTableRow,
  TransactionTable,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Box
      as="table"
      fontSize={4}
      border="normal"
      borderColor="grey"
      my={5}
      mx="auto"
    >
      <thead>
        <tr>
          <TransactionTableHeader>Type</TransactionTableHeader>
          <TransactionTableHeader>Amount</TransactionTableHeader>
          <TransactionTableHeader>Currency</TransactionTableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTableRow key={id}>
            <TransactionTable>{type}</TransactionTable>
            <TransactionTable>{amount}</TransactionTable>
            <TransactionTable>{currency}</TransactionTable>
          </TransactionTableRow>
        ))}
      </tbody>
    </Box>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
