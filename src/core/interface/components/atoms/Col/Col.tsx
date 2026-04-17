import styles from "./Col.module.css"
import { ReactNode } from "react";

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  start?: number | 'auto';
  smStart?: number | 'auto';
  mdStart?: number | 'auto';
  lgStart?: number | 'auto';
  className?: string;
}

export const Col = ({ children, xs = 4, sm, md, lg, start = 'auto', smStart, mdStart, lgStart, className = '', style, ...props }: ColProps) => {
  const vars = {
    '--col-xs': xs,
    '--col-sm': sm ?? xs,
    '--col-md': md ?? sm ?? xs,
    '--col-lg': lg ?? md ?? sm ?? xs,

    '--col-start': start,
    '--col-start-sm': smStart ?? start,
    '--col-start-md': mdStart ?? smStart ?? start,
    '--col-start-lg': lgStart ?? mdStart ?? smStart ?? start,
    
  } as React.CSSProperties;

  return (
    <div style={{...vars, ...style}} className={`${styles.col} ${className}`} {...props}>
      {children}
    </div>
  );
};