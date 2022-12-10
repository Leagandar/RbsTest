declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png" {
  const path: string;
  export default path;
}
