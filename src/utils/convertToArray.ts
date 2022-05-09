interface DataInterface {
  key: string;
  value: string;
}
export const convertToArray = (property: {}) => {
  const returnData: DataInterface[] = Object.entries<any>(property)
    .filter((e) => !e.includes('__typename'))
    .map(([key, value]) => {
      return { key, value };
    });
  return returnData;
};
