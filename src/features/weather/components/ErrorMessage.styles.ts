import styled from "styled-components";

export const ErrorPanel = styled.div`
  width: 100%;
  min-height: 160px;
  border: 1px solid #fca5a5;
  border-radius: 16px;
  background: #fef2f2;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(60, 50, 40, 0.04);
  display: grid;
  place-items: center;
  text-align: center;
  color: #b91c1c;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 600px) {
    border-radius: 10px;
    padding: 18px;
    min-height: 100px;
    box-shadow: 0 2px 8px rgba(60, 50, 40, 0.03);
  }
`;

export const RetryButton = styled.button`
  margin-top: 16px;
  border: 1px solid #fca5a5;
  border-radius: 12px;
  background: #fff;
  color: #b91c1c;
  padding: 8px 16px;
  font-size: 0.97rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.16s;

  &:hover:not(:disabled) {
    background: #fee2e2;
  }

  &:disabled {
    color: #94a3b8;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #b91c1c;
    outline-offset: 2px;
  }
`;
