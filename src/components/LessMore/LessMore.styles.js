import styled from "styled-components";

export const LessMoreWrapper = styled.div`
  width: 130px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 30px;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;

export const LessMoreLabel = styled.span`
  color: ${({ theme }) => theme.gray};
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 3px;
  margin-left: 0.7rem;
  font-weight: 500;
`;

export const LessMoreCircle = styled.span`
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
