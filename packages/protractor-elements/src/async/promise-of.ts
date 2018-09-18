export function promiseOf<T>(result: T): Promise<T> {
  return new Promise<T>((resolve, reject) => resolve(result));
}
