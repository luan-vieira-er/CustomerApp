export type StackProps = {
  mobile: number;
};

export interface IContent {
  title: string;
  description: string;
  subtitle: string;
}

export interface ICustomList {
  title: string;
  content: IContent[];
}
