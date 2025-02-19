export interface ModalWrapperProps {
    open: boolean;
}

export interface ModalProps {
    open: boolean;
    close: () => void;
    title?: string;
    describe?: string;
    children?: React.ReactNode;
}
