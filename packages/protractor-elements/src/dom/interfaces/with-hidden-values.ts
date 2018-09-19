// TODO Split

export interface IWithGetHiddenValue<T> {
  getHiddenValue$(): Promise<T>;
}

export interface IWithSetHiddenValue<T> {
  setHiddenValue$(value: T): Promise<void>
}

export interface IWithHiddenValueList<T> {
  getHiddenValueList$(): Promise<T[]>;
}
