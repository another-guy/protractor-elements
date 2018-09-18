export interface IFocusable {
  isFocused$(): Promise<boolean>;
  focus$(): Promise<void>;
}
