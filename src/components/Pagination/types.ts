export interface IPaginationProps {
    currentPage: number;
    lastPage: number;
    onNextPage(): void;
    onPrevPage(): void;
}
