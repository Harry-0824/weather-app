import styled from "styled-components";

export const EmptyPanel = styled.div`
  width: 100%;
  min-height: 160px;
  border: 1px solid #8c6239;
  border-radius: 16px;
  background: #faf5ef;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(60, 50, 40, 0.04);
  display: grid;
  place-items: center;
  text-align: center;
  color: #6e5a4c;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 600px) {
    border-radius: 10px;
    padding: 18px;
    min-height: 100px;
    box-shadow: 0 2px 8px rgba(60, 50, 40, 0.03);
  }
`;

export const EmptyIcon = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 2rem;
`;
