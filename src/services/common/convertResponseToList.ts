import { IListItem, IResponse } from 'types';

export const convertResponseToList = (response: IResponse[]): IListItem[] => {
  const list: IListItem[] = [];

  for (const item of response) {
    list.push({
      value: item.Id,
      label: item.Name,
    });
  }

  return list;
};
