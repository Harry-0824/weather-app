import { LoadingPanel } from "./LoadingState.styles";

export default function LoadingState() {
  return (
    <LoadingPanel role="status" aria-live="polite">
      天氣資料查詢中，請稍候…
    </LoadingPanel>
  );
}
