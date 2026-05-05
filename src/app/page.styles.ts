import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #f6f1ea;
  position: relative;
  z-index: 0;
  overflow-x: clip;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 600px;
    height: 420px;
    background: radial-gradient(
      ellipse 60% 40% at 35% 30%,
      rgba(140, 98, 57, 0.1) 0%,
      rgba(140, 98, 57, 0.03) 70%,
      transparent 100%
    );
    pointer-events: none;
    opacity: 0.45;
    filter: blur(2px);
    z-index: 1;
    max-width: 100vw;
    max-height: 50vh;
  }

  &::after {
    content: "";
    position: fixed;
    bottom: 0;
    right: 0;
    width: 420px;
    height: 220px;
    background: radial-gradient(
      ellipse 60% 40% at 60% 80%,
      rgba(255, 220, 180, 0.1) 0%,
      rgba(246, 241, 234, 0) 100%
    );
    pointer-events: none;
    opacity: 0.35;
    filter: blur(2px);
    z-index: 1;
    max-width: 100vw;
    max-height: 30vh;
  }

  @media (max-width: 900px) {
    &::before,
    &::after {
      opacity: 0.13;
      filter: blur(3px);
    }
  }

  @media (max-width: 600px) {
    &::before,
    &::after {
      opacity: 0.07;
      filter: blur(4px);
    }
  }
`;

export const Shell = styled.div`
  width: min(100% - 32px, 1080px);
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  padding: 64px 0 0;
  box-sizing: border-box;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    width: min(100% - 24px, 1080px);
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 0 0;
  }

  @media (max-width: 600px) {
    width: min(100% - 12px, 1080px);
    padding: 0;
  }
`;

export const MicroHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #d4bfad;
  margin-bottom: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
`;

export const Brand = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  color: #8c6239;
  letter-spacing: 0.04em;
`;

export const StatusChip = styled.span`
  background: #edddc9;
  color: #8c6239;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 600;
  padding: 4px 14px;
  letter-spacing: 0.04em;
`;

export const Hero = styled.section`
  align-self: start;
  max-width: 440px;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: -48px;
    left: -56px;
    width: 320px;
    height: 180px;
    background: radial-gradient(
      ellipse 60% 40% at 40% 40%,
      rgba(140, 98, 57, 0.08) 0%,
      rgba(140, 98, 57, 0) 100%
    );
    pointer-events: none;
    opacity: 0.45;
    filter: blur(1.5px);
    z-index: 1;
  }

  @media (max-width: 900px) {
    max-width: 100%;

    &::before {
      opacity: 0.13;
      filter: blur(3px);
    }
  }

  @media (max-width: 600px) {
    &::before {
      opacity: 0.07;
      filter: blur(4px);
    }
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 14px;
  color: #8c6239;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  color: #111827;
  font-size: clamp(2.25rem, 5vw, 4.25rem);
  font-weight: 850;
  letter-spacing: -0.06em;
  line-height: 0.98;

  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

export const ValueProp = styled.p`
  margin: 24px 0 0;
  color: #5c4a3c;
  font-size: 1.08rem;
  line-height: 1.75;
`;

export const ProofPoints = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;

  li {
    border: 1px solid #c8b4a0;
    border-radius: 999px;
    background: linear-gradient(120deg, #fffdf9 80%, #f6f1ea 100%);
    color: #8c6239;
    padding: 6px 14px;
    font-size: 0.93rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    box-shadow: 0 1px 4px rgba(60, 50, 40, 0.04);
  }
`;

export const DemoCard = styled.section`
  align-self: start;
  width: 100%;
  min-width: 0;
  border: 1.5px solid #c8b4a0;
  border-radius: 16px;
  background: #fffdf9;
  box-shadow:
    0 24px 70px rgba(60, 50, 40, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.7) inset;
  padding: 40px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  z-index: 2;
  box-sizing: border-box;

  @media (max-width: 900px) {
    max-width: 100%;
    box-shadow: 0 6px 24px rgba(60, 50, 40, 0.06);
    padding: 24px 8px 16px;
  }

  @media (max-width: 600px) {
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(60, 50, 40, 0.03);
  }
`;

export const DemoHeader = styled.div`
  margin-bottom: 20px;

  h2 {
    margin: 0;
    color: #111827;
    font-size: 1.25rem;
    font-weight: 780;
    letter-spacing: -0.02em;
  }

  p {
    margin: 8px 0 0;
    color: #6e5a4c;
    font-size: 0.98rem;
  }
`;

export const DemoKicker = styled.p`
  margin: 0 0 6px;
  color: #8c6239;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const StateArea = styled.div`
  width: 100%;
`;

export const CredibilityStrip = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: linear-gradient(90deg, #f7f1ea 60%, #fffdf9 100%);
  color: #6e5a4c;
  font-size: 0.98rem;
  border-top: 1px solid #d4bfad;
  border-bottom: 1px solid #d4bfad;
  padding: 18px 0 8px;
  margin-top: 32px;
  box-shadow: 0 2px 8px rgba(60, 50, 40, 0.03);
  box-sizing: border-box;

  div {
    padding: 0 8px;
    white-space: normal;
    word-break: break-word;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 8px;
    padding: 10px 0 4px;
    margin-top: 24px;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    font-size: 0.93rem;
    padding: 4px 0;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  color: #737373;
  font-size: 0.98rem;
  padding: 32px 0 24px;
  background: none;
  letter-spacing: 0.01em;

  @media (max-width: 900px) {
    padding: 18px 0 8px;
  }

  @media (max-width: 600px) {
    font-size: 0.93rem;
    padding: 8px 0 4px;
  }
`;
