declare module "figma:asset/*" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}
