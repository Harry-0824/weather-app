import { EmptyPanel, EmptyIcon } from "./EmptyState.styles";

export default function EmptyState() {
  return (
    <EmptyPanel aria-label="尚未查詢">
      <EmptyIcon aria-hidden="true">🔍</EmptyIcon>
      請輸入地點並查詢天氣。
    </EmptyPanel>
  );
}
