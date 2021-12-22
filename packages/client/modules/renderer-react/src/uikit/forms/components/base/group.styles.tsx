import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const HorizontalGroup = styled(Group)`
  flex-direction: row;
`;

export const VerticalGroup = styled(Group)`
  flex-direction: column;
`;
