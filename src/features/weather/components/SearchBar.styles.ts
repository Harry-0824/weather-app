import styled from "styled-components";

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const CityInput = styled.input`
  min-width: 0;
  flex: 1;
  height: 44px;
  border: 1px solid #8c6239;
  border-radius: 12px;
  background: #fff;
  color: #111827;
  padding: 0 14px;
  font-size: 1rem;
  outline: none;
  transition:
    border-color 0.16s,
    box-shadow 0.16s,
    background 0.16s;

  &::placeholder {
    color: #b09484;
  }

  &:disabled {
    background: #f7f1ea;
    color: #b09484;
  }

  &:focus-visible {
    border-color: #8c6239;
    box-shadow: 0 0 0 3px rgba(140, 98, 57, 0.18);
  }
`;
