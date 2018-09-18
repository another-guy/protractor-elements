export interface IVisible {
  isPresent$(): Promise<boolean>;
  isDisplayed$(): Promise<boolean>;
  isEnabled$(): Promise<boolean>;
}
