interface DataInterface {
  key: string;
  value: string;
}
export const convertToArray = (property: {}) => {
  const returnData: DataInterface[] = Object.entries(property)
    .filter((e) => !e.includes('__typename'))
    .map(([key, value]) => {
      const formattedValue = (): string => {
        if (value == null) {
          return '-';
        } else {
          return value;
        }
      };
      return { key, value: formattedValue() };
    });
  return returnData;
};
