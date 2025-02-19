export interface IAccordeonProps {
    children: React.ReactElement;
    title: string;
    description: string;
    openCallBack?(open: boolean): void;
}
