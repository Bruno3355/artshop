import styles from "./Col.module.css"
import { ReactNode } from "react";

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  className?: string;
}

export const Col = ({ children, xs = 4, sm, md, lg, className = '', style, ...props }: ColProps) => {
  const vars = {
    '--col-xs': xs,
    '--col-sm': sm ?? xs,
    '--col-md': md ?? sm ?? xs,
    '--col-lg': lg ?? md ?? sm ?? xs,
  } as React.CSSProperties;

  return (
    <div style={{...vars, ...style}} className={`${styles.col} ${className}`} {...props}>
      {children}
    </div>
  );
};