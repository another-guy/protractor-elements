export async function filter$<T>(
  target: T[],
  filterFn: (_: T) => Promise<boolean>
): Promise<T[]> {
  const result: T[] = [];
  for (const item of target) if (await filterFn(item)) result.push(item);
  return result;
}
