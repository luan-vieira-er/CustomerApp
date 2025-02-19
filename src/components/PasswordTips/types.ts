export interface IPasswordTips {
    rules: {
        routine: () => boolean | null;
        message: string;
    }[];
    title: string;
}
