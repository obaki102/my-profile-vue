export async function getCacheData<T>(
  key: string,
  fetchDataIfNeeded: () => Promise<T[] | T>
): Promise<T[]> {

  const isDataStale = (timestamp: number): boolean => {
    const oneDayInMillis = 24 * 60 * 60 * 1000; // 1 day 
    const currentTime = new Date().getTime();
    return currentTime - timestamp > oneDayInMillis;
  }

  const saveData = (data: T[], timestamp: number): void => {
    const dataToStore = JSON.stringify({ data, timestamp });
    localStorage.setItem(key, dataToStore);
  }

  const storedData = localStorage.getItem(key);
  if (storedData) {
    const { data, timestamp } = JSON.parse(storedData);
    if (!isDataStale(timestamp)) {
      return Array.isArray(data) ? data : [data];
    }
  }

  const fetchData = await fetchDataIfNeeded();
  const dataToSave = Array.isArray(fetchData) ? fetchData : [fetchData];
  saveData(dataToSave, new Date().getTime());
  return dataToSave;
}