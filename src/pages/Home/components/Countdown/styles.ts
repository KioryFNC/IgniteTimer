import styled from "styled-components";

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(3rem, 10vw, 10rem);
  width: 100%;
  line-height: 1.2;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;