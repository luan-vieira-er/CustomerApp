export type MessageType = 'warning' | 'error';

export interface InputMessageProps {
    message: string;
    type: MessageType;
}
