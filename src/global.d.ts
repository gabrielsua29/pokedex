// Para poder usar modulos css
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes
}

// Para que Typescript reconozca img
declare module "*.png";
declare module "*.gif";
