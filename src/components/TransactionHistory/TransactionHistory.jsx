import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableHead = styled.th`
  width: 200px;
  text-align: center;
  border: 1px solid black;
  background-color: grey;
`;

const TableLine = styled.td`
  border: 1px solid black;
  text-align: center;
`;

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history" style={{ marginTop:"20px"}}>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableLine>{type}</TableLine>
              <TableLine>{amount}</TableLine>
              <TableLine>{currency}</TableLine>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

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
