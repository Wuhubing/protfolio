declare module 'react-icon-cloud' {
    import { ReactNode } from 'react';
  
    export interface CloudProps {
      containerProps?: React.HTMLAttributes<HTMLDivElement>;
      options?: {
        reverse?: boolean;
        depth?: number;
        wheelZoom?: boolean;
        imageScale?: number;
        activeCursor?: string;
        tooltip?: string;
        initial?: [number, number];
        clickToFront?: number;
        tooltipDelay?: number;
        outlineColour?: string;
        maxSpeed?: number;
        minSpeed?: number;
        [key: string]: any;
      };
      [key: string]: any;
    }
  
    export function Cloud(props: CloudProps & { children: ReactNode }): JSX.Element;
  
    export interface FetchSimpleIconsOptions {
      slugs: string[];
    }
  
    export function fetchSimpleIcons(options: FetchSimpleIconsOptions): Promise<{
      simpleIcons: {
        [key: string]: {
          title: string;
          slug: string;
          svg: string;
          path: string;
        };
      };
    }>;
  
    export interface RenderSimpleIconOptions {
      icon: {
        title: string;
        slug: string;
        svg: string;
        path: string;
      };
      size: number;
      aProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
      [key: string]: any;
    }
  
    export function renderSimpleIcon(options: RenderSimpleIconOptions): JSX.Element;
  }