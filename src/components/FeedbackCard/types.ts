export interface FeedbackCardProps {
  type: string;
  loading: boolean;
  reload: () => void;
}

export interface TypeProps {
  color: string;
  title: string;
  button: string;
  subtitle: string;
  infoText: string;
  animation: string;
}
