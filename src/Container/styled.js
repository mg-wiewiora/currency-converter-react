import styled from "styled-components";

export const Container = styled.main`
  max-width: 500px;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.graphite};
  line-height: 1.5;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.lilac};
  border-radius: 10px;
  box-shadow: 0 0 4px 2px ${({ theme }) => theme.color.shadow};
`;
