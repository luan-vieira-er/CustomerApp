export interface IRatingProps {
    maxNote: number;
    averageNote: number;
    votes: number;
    maxVotes?: number;
    votesTextSingular?: string;
    votesTextPlural?: string;
}
