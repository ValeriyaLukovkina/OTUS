declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
 }

 declare module "*.svg" {
   export const ReactComponent: React.FunctionComponent<
   React.SVGProps<SVGSVGElement> & { title?: string }
 >;

 const src: string;
 export default src;
  }