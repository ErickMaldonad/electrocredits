export const truncateText = (str: string) => {
  if (str.length < 40) return str;
  return str.substring(0, 50) + "...";
};