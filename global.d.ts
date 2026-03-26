/* 
  - Tell TS .module.css files are valid as object containing string classes
  - Fallback for standard .css and .scss imports
  - Prevents "Module not found" errors for non-JS styling assets
*/

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css';