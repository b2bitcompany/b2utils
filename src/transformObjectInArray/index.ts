export const transformObjectInArray = (obj: any) => {
  if (typeof obj !== 'object') {
    return [obj];
  }

  const nestedMessages: Array<any> = Object.values(obj).map((value: any) => {
    if (Array.isArray(value)) {
      if (
        value.some((value) => {
          return typeof value == 'object';
        })
      ) {
        return value.flatMap((a) => transformObjectInArray(a));
      }

      return value;
    }

    if (typeof value === 'object') {
      return transformObjectInArray(value);
    }

    return value;
  });

  return nestedMessages.flat();
};
