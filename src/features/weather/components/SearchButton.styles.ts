import styled from "styled-components";

export const SubmitButton = styled.button`
  flex: 0 0 auto;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: #8c6239;
  color: #fff;
  padding: 0 22px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.16s,
    box-shadow 0.16s,
    transform 0.16s;

  &:hover:not(:disabled) {
    background: #7a5230;
    box-shadow: 0 2px 8px rgba(140, 98, 57, 0.15);
    transform: translateY(-1px);
  }

  &:disabled {
    background: #ddd0c2;
    color: #b09484;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #8c6239;
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
