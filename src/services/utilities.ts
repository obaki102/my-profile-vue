export const formatTimestamp = (timestamp: Date) => {
  const minutesAgo = Math.floor((Date.now() - timestamp.getTime()) / (1000 * 60));
  return `${minutesAgo} min ago`;
};