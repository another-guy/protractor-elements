export function shouldImplement(...featureList: string[]): string {
  if (!featureList) featureList = [];

  return `Should implement:` +
    featureList
      .map(feature => `\n  * ${feature}`)
      .join(';') +
    `.`;
}
