export const pick = (obj: any, keys: any) => {
  return keys.reduce((acc: any, key: any) => {
    acc[key] = obj[key];
    return acc;
  }, {});
};
