export const transformObjectInArray = (obj: any) => {
  if (typeof obj !== 'object') {
    return [obj];
  }

  const nestedMessages = Object.values(obj).map((value: any) => {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === 'object') {
      return transformObjectInArray(value);
    }

    return value;
  });

  const data: Array<string> = [];

  nestedMessages.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((nestedItem) => {
        data.push(nestedItem);
      });
    } else {
      data.push(item);
    }
  });

  return data;
};
