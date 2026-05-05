import styled from "styled-components";

export const Card = styled.section`
  width: 100%;
  min-height: 160px;
  border: 1px solid #d4bfad;
  border-radius: 16px;
  background: #fffdf9;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 8px 32px rgba(60, 50, 40, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    border-radius: 10px;
    padding: 18px;
    min-height: 100px;
    box-shadow: 0 2px 8px rgba(60, 50, 40, 0.03);
  }
`;

export const Details = styled.div`
  margin-top: 16px;
`;

export const Condition = styled.div`
  margin-top: 4px;
  color: #5c4a3c;
  font-size: 1.02rem;
  font-weight: 600;
`;
