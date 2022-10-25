import { getRandomInt } from 'components/helpers/getRandomColor';
import styled from 'styled-components';

const ListStatistics = styled.ul`
  display: flex;
  justify-content: center;
  /gap: 10px;

  list-style: none;
  margin: 0;
  padding: 0;
`;
const SectionStatistics = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  width: 300px;
  margin: 0 auto;
`;
const Title = styled.h2`
  border-bottom: 2px solid black;
  width: 100%;
  align-items: center;
  margin: 0;
`;

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics className="statistics">
      {title && <Title className="title">{title}</Title>}
      <ListStatistics className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className="item"
              key={id}
              style={{
                backgroundColor: getRandomInt(255),
                margin: 0,
                textAlign: 'center',
              }}
            >
              <span className="label">.{label} </span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ListStatistics>
    </SectionStatistics>
  );
};
