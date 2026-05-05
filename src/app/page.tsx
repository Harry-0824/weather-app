"use client";

import { useWeatherQuery } from "../features/weather/hooks/useWeatherQuery";
import SearchBar from "../features/weather/components/SearchBar";
import WeatherResultCard from "../features/weather/components/WeatherResultCard";
import LoadingState from "../features/weather/components/LoadingState";
import ErrorMessage from "../features/weather/components/ErrorMessage";
import EmptyState from "../features/weather/components/EmptyState";
import {
  Page,
  Shell,
  MicroHeader,
  Brand,
  StatusChip,
  Hero,
  Eyebrow,
  Title,
  ValueProp,
  ProofPoints,
  DemoCard,
  DemoHeader,
  DemoKicker,
  StateArea,
  CredibilityStrip,
  Footer,
} from "./page.styles";

export default function Home() {
  const { query, setQuery, search, isLoading, error, data, hasSearched } =
    useWeatherQuery();

  return (
    <Page>
      <Shell>
        {/* Micro Header */}
        <MicroHeader>
          <Brand>Weather App</Brand>
          <StatusChip>Validated MVP</StatusChip>
        </MicroHeader>

        {/* Two-column grid: Hero (left), Demo Card (right) */}
        <Hero aria-labelledby="weather-title">
          <Eyebrow>Portfolio MVP</Eyebrow>
          <Title id="weather-title">即時天氣查詢</Title>
          <ValueProp>
            以真實 API、清楚狀態處理與響應式介面，示範一個可交付的前端產品切片。
          </ValueProp>
          <ProofPoints aria-label="專案重點">
            <li>Real API Data</li>
            <li>Accessible Search / Retry</li>
            <li>Responsive UI</li>
          </ProofPoints>
        </Hero>

        <DemoCard aria-label="天氣查詢互動示範">
          <DemoHeader>
            <DemoKicker>Live Demo</DemoKicker>
            <h2>查詢目前天氣</h2>
            <p>輸入地點名稱，檢視目前天氣狀態與查詢回饋。</p>
          </DemoHeader>

          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={search}
            isLoading={isLoading}
          />

          <StateArea aria-live="polite">
            {isLoading && <LoadingState />}
            {!isLoading && error && (
              <ErrorMessage message={error} onRetry={() => search(query)} />
            )}
            {!isLoading && !error && data && <WeatherResultCard data={data} />}
            {!isLoading && !error && !data && !hasSearched && <EmptyState />}
          </StateArea>
        </DemoCard>
      </Shell>

      {/* Credibility Strip */}
      <CredibilityStrip aria-label="產品可信度說明">
        <div>Open-Meteo powered</div>
        <div>Empty / Loading / Error / Success states</div>
        <div>Built with Next.js + TypeScript</div>
      </CredibilityStrip>

      {/* Footer */}
      <Footer>Validated MVP flow for portfolio handoff.</Footer>
    </Page>
  );
}
