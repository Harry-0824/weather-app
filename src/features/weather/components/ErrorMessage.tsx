import { ErrorPanel, RetryButton } from "./ErrorMessage.styles";

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <ErrorPanel role="alert" aria-live="assertive">
      <div>{message}</div>
      <RetryButton type="button" onClick={onRetry}>
        重新查詢
      </RetryButton>
    </ErrorPanel>
  );
}
