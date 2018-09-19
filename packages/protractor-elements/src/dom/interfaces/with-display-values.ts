// TODO Split

export interface IWithGetDisplayValue<T> {
  getDisplayValue$(): Promise<T>;
}

export interface IWithSetDisplayValue<T> {
  setDisplayValue$(value: T): Promise<void>
}

export interface IWithDisplayValueList<T> {
  getDisplayValueList$(): Promise<T[]>;
}

export interface IWithClearableValue {
  clearDisplayValue$(): Promise<void>;
}
