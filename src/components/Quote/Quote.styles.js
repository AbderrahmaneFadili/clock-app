import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  height: 50vh;
  position: relative;
`;

export const QuoteText = styled.q`
  font-weight: 300;
  line-height: 1.9;
`;

export const QuoteAuthor = styled.h5`
  margin: 1rem 0;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const Refresh = styled(BiRefresh)`
  position: absolute;
  right: 0;
  top: 1rem;
  font-size: 2rem;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s linear;

  &:hover {
    opacity: 1;
  }
  &:active {
    transform: scale(1.3);
  }
`;
