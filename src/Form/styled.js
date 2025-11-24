import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.color.violet};
  padding: 10px;
  margin: 10px 0;
`;

export const Legend = styled.legend`
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.violet};
  color: ${({ theme }) => theme.color.white};
  padding: 8px;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Section = styled.p`
  flex-basis: calc(50% - 10px);
  min-width: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-basis: 100%;
    min-width: 100%;
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 0 0 5px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.color.graphite};
`;

export const Field = styled.input`
  padding: 7px;
  border-radius: 5px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.violet};
  box-sizing: border-box;
  margin-top: 4px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.violet};
  color: ${({ theme }) => theme.color.white};
  padding: 8px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.02);
  }

  &:active {
    filter: brightness(120%);
  }
`;
