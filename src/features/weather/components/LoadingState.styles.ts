import styled from "styled-components";

export const LoadingPanel = styled.div`
  width: 100%;
  min-height: 160px;
  border: 1px solid #8c6239;
  border-radius: 16px;
  background: #faf3ea;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(60, 50, 40, 0.04);
  display: grid;
  place-items: center;
  text-align: center;
  color: #8c6239;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 600px) {
    border-radius: 10px;
    padding: 18px;
    min-height: 100px;
    box-shadow: 0 2px 8px rgba(60, 50, 40, 0.03);
  }
`;
