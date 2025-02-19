export interface TokenInputProps {
  tokenType: 'normal' | 'complete' | 'error';
}

export interface IVerificationCodeProps {
  onClick: () => void;
  lenght?: number;
  timer?: number;
  loading: boolean;
  value: string;
  handleSetToken: (value: string) => void;
}
