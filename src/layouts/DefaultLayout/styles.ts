import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    max-width: 95%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    height: auto;
    margin: 2rem auto;
    padding: 1.5rem;
  }
`;