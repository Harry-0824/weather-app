import { SubmitButton } from "./SearchButton.styles";

interface SearchButtonProps {
  isLoading: boolean;
  onClick?: () => void;
}

export default function SearchButton({
  isLoading,
  onClick,
}: SearchButtonProps) {
  return (
    <SubmitButton
      type={onClick ? "button" : "submit"}
      disabled={isLoading}
      onClick={onClick}
      aria-label={isLoading ? "查詢中" : "送出查詢"}
    >
      {isLoading ? "查詢中…" : "查詢"}
    </SubmitButton>
  );
}
