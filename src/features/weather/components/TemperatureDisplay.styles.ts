import styled from "styled-components";

export const Temperature = styled.div`
  color: #8c6239;
  font-size: clamp(3.2rem, 7vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.06em;
  line-height: 1.05;

  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;
