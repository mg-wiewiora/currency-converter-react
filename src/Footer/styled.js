import styled from "styled-components";

export const Wrapper = styled.footer`
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.color.silver};
  font-size: 14px;
  color: ${({ theme }) => theme.color.grey};
`;
